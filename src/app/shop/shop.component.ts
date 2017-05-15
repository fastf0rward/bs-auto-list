import {Component, OnInit} from "@angular/core";
import {GroceryListService} from "../grocery-list/grocery-list.service";
import * as _ from "lodash";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: any[];

  constructor(private groceryListService: GroceryListService) {
    groceryListService.products.subscribe(_products => {
      this.products = _.filter(_products, {accepted: true});
    });
  }

  ngOnInit() {
  }

}
