import { Component } from '@angular/core';
import {GroceryListService} from "./grocery-list/grocery-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userId: string;

  constructor(private groceryListService: GroceryListService) {
    this.groceryListService.userId.subscribe(_id => {
      this.userId = _id;
    });
  }
}
