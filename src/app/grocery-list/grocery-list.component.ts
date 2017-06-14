import {Component, OnInit} from "@angular/core";
import {GroceryListService} from "./grocery-list.service";
import * as _ from "lodash";
import {ActivatedRoute} from "@angular/router";
import {GroceryListExplanationDialogComponent} from "./grocery-list-explanation-dialog.component";
import {MdDialog} from "@angular/material";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  products: any[];
  suggestions: any[] = [];
  showLoader: boolean;

  constructor(public groceryListService: GroceryListService, private route: ActivatedRoute, private dialog: MdDialog) {
    this.groceryListService.showLoader.subscribe(_show => {
      this.showLoader = _show;
    });
    this.route.params.subscribe(_params => {
      let _userId = _params['user_id'];
      this.groceryListService.setUserId(_userId);
    });
  }

  ngOnInit() {
    this.groceryListService.products.subscribe(_products => {
      this.products = _.filter(_products, function (_prod) {
        return _prod['status'] != 'rejected';
      });
      this.suggestions = _products.filter(_prod => _prod.suggested && _prod.status !== 'accepted' && _prod.status !== 'rejected');
      this.groceryListService._showLoaderSubject.next(false);
    });

    let dialogRef = this.dialog.open(GroceryListExplanationDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.groceryListService._showLoaderSubject.next(false);
    });
  }

}
