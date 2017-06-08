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

  products: any[] = [];

  constructor(private groceryListService: GroceryListService, private dialog: MdDialog, private location: Location) {
  }

  ngOnInit() {
    let dialogRef = this.dialog.open(ShopExplanationDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
    });
  }

  goBack() {
    this.location.back();
  }

}
