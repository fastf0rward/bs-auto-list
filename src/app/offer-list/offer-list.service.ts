import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import * as _ from "lodash";

@Injectable()
export class OfferListService {

  private _productsSubject = new BehaviorSubject([]);
  products = this._productsSubject.asObservable();

  _showLoaderSubject = new BehaviorSubject(true);
  showLoader = this._showLoaderSubject.asObservable();

  constructor() {
    let mockSuggestions = [
      {name: 'Knorr Mix', quantity: '100g', type: '2=1', shopLogo: 'ah_logo', discount: 50, suggested: true, accepted: false},
      {name: 'Aardappelen', quantity: '1kg', type: '', shopLogo: 'ah_logo', discount: 35, suggested: true, accepted: false},
      {name: 'Gehakt', quantity: '400g', type: '', shopLogo: 'jumbo_logo', discount: 35, suggested: true, accepted: false},
      {name: 'Pindakaas', quantity: '400g', type: '2=1', shopLogo: 'ah_logo', discount: 50, suggested: true, accepted: false},
    ];
    this._productsSubject.next(mockSuggestions);
  }

  addProduct(productName: string) {
    if (productName.length === 0) {
      return;
    }
    let _products = this._productsSubject.getValue();
    let _prod = {
      name: productName,
      suggested: false,
      accepted: true
    };
    _products.push(_prod);
    this._productsSubject.next(_products);
  }

  removeProduct(product: any) {
    let _products = this._productsSubject.getValue();
    _products = _.without(_products, product);
    this._productsSubject.next(_products);
  }

  acceptSuggestion(suggestion: any) {
    let _products = this._productsSubject.getValue();
    _products.forEach(_prod => {
      if (_prod.name === suggestion.name) {
        _prod.accepted = true;
      }
    });

    this._productsSubject.next(_products);
  }

  acceptAllSuggestions(): void {
    let _products = this._productsSubject.getValue();
    _products.forEach(_prod => {
      if (_prod.suggested) {
        _prod.accepted = true;
      }
    });
    this._productsSubject.next(_products);
  }

  rejectSuggestion(suggestion: any) {
    let _products = this._productsSubject.getValue();
    _products = _.without(_products, suggestion);

    this._productsSubject.next(_products);
  }

}
