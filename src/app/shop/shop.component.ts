import {Component, OnInit} from "@angular/core";
import {GroceryListService} from "../grocery-list/grocery-list.service";
import * as _ from "lodash";
import {ShopExplanationDialogComponent} from "./shop-explanation-dialog.component";
import {MdDialog} from "@angular/material";
import {Location} from "@angular/common";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  products: any[];
  showGroceryList: boolean = false;

  constructor(private groceryListService: GroceryListService, private dialog: MdDialog) {
    groceryListService.products.subscribe(_products => {
      this.products = _.filter(_products, {accepted: true});
    });

    // reset grocery list visibility
    this.showGroceryList = false;
  }

  ngOnInit() {
    let dialogRef = this.dialog.open(ShopExplanationDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.showGroceryList = true;
    });
  }

  goBack() {
    this.location.back();
  }

}
