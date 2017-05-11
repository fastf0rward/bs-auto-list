import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import * as _ from "lodash";

@Injectable()
export class GroceryListService {

  private _productsSubject = new BehaviorSubject([]);
  products = this._productsSubject.asObservable();

  private _suggestionsSubject = new BehaviorSubject([]);
  suggestions = this._suggestionsSubject.asObservable();

  constructor() {
    let mockSuggestions = [
      {name: 'Halfvolle yoghurt', quantity: '1,5L'},
      {name: 'Aardappelen', quantity: '1kg'},
      {name: 'Pindakaas', quantity: '400g'}
    ];
    this._suggestionsSubject.next(mockSuggestions);
  }

  addProduct(productName: string) {
    let _products = this._productsSubject.getValue();
    _products.push({name: productName});
    this._productsSubject.next(_products);
  }

  removeProduct(product: any) {
    let _products = this._productsSubject.getValue();
    _.without(_products, product);
    this._productsSubject.next(_products);
  }

  acceptSuggestion(suggestion: any) {
    let _suggestions = this._suggestionsSubject.getValue();
    let _products = this._productsSubject.getValue();

    _products.push(suggestion);
    this._productsSubject.next(_products);
    _suggestions = _.without(_suggestions, suggestion);
    this._suggestionsSubject.next(_suggestions);
  }

  acceptAllSuggestions(): void {
    let _suggestions = this._suggestionsSubject.getValue();
    let _products = this._productsSubject.getValue();

    _products = _.concat(_products, _suggestions);
    this._productsSubject.next(_products);
    _suggestions = [];
    this._suggestionsSubject.next(_suggestions);
  }

  rejectSuggestion(suggestion: any) {
    let _suggestions = this._suggestionsSubject.getValue();
    _suggestions = _.without(_suggestions, suggestion);

    this._suggestionsSubject.next(_suggestions);
  }

}
