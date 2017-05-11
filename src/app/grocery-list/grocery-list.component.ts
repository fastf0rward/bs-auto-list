import {Component, OnInit} from "@angular/core";
import * as _ from "lodash";

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.css']
})
export class GroceryListComponent implements OnInit {
  products: any[];
  suggestions: any[];

  constructor() {
    this.products = this.getProducts();
    this.suggestions = this.getSuggestions();
  }

  ngOnInit() {
  }

  private getProducts(): any[] {
    let products = [];

    return products;
  }

  private getSuggestions(): any[] {
    let suggestions = [
      {name: 'Halfvolle yoghurt', quantity: '1,5L'},
      {name: 'Aardappelen', quantity: '1kg'},
      {name: 'Pindakaas', quantity: '400g'}
    ];

    return suggestions;
  }

  addProduct(productName: string) {
    this.products.push({name: productName});
  }

  removeProduct(product: any) {
    this.products = _.without(this.products, product);
  }

  acceptSuggestion(suggestion: any) {
    this.products.push(suggestion);
    this.suggestions = _.without(this.suggestions, suggestion);
  }

  acceptAllSuggestions() : void {
    this.products = _.concat(this.suggestions, this.products);
    this.suggestions = [];
  }

  rejectSuggestion(suggestion: any) {
    this.suggestions = _.without(this.suggestions, suggestion);
  }

}
