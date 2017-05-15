import {Component, OnInit} from "@angular/core";
import {GroceryListService} from "./grocery-list.service";
import * as _ from "lodash";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  products: any[];
  suggestions: any[];
  showLoader: boolean;

  constructor(public groceryListService: GroceryListService) {
    this.groceryListService.products.subscribe(_products => {
      this.products = _products;
      this.suggestions = _.filter(_products, {suggested: true, accepted: false});
    });
    this.groceryListService.showLoader.subscribe(_show => {
      this.showLoader = _show;
    });
  }

  ngOnInit() {
  }


}
