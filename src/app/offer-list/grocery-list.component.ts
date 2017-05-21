import {Component, OnInit} from "@angular/core";
import {GroceryListService} from "./grocery-list.service";
import * as _ from "lodash";
import {MdDialog} from "@angular/material";
import {GroceryListExplanationDialogComponent} from "./grocery-list-explanation-dialog.component";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  products: any[];
  suggestions: any[];
  showLoader: boolean;

  constructor(public groceryListService: GroceryListService, private dialog: MdDialog) {
    this.groceryListService.products.subscribe(_products => {
      this.products = _products;
      this.suggestions = _.filter(_products, {suggested: true, accepted: false});
    });
    this.groceryListService.showLoader.subscribe(_show => {
      this.showLoader = _show;
    });

    // reset loader
    this.groceryListService._showLoaderSubject.next(true);
  }

  ngOnInit() {
    let dialogRef = this.dialog.open(GroceryListExplanationDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.groceryListService._showLoaderSubject.next(false);
    });
  }


}
