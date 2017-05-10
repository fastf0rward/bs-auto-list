import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  products: any[];

  constructor() {
    this.products = this.getProducts();
  }

  ngOnInit() {
  }

  private getProducts(): any[] {
    let products = [
      {name: 'Halfvolle yoghurt (1,5L)'},
      {name: 'Aardappelen (1kg)'},
      {name: 'Spinazie (400g)'},
      {name: 'Muesli (1kg)'},
      {name: 'Sinaasappels (1kg)'},
      {name: 'Lays Chips Naturel'},
      {name: 'Coca Cola (1,5L)'}
    ];

    return products;
  }

}
