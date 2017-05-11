import {Component, OnInit} from "@angular/core";
import {GroceryListService} from "./grocery-list.service";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  products: any[];
  suggestions: any[];

  constructor(public groceryListService: GroceryListService) {
    this.groceryListService.products.subscribe(_products => {
      this.products = _products;
    });
    this.groceryListService.suggestions.subscribe(_suggestions => {
      this.suggestions = _suggestions;
    });
  }

  ngOnInit() {
  }


}
