import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {AngularFireDatabase} from "angularfire2/database/database";
import {Subject} from "rxjs";

@Injectable()
export class GroceryListService {

  _showLoaderSubject = new BehaviorSubject(true);
  showLoader = this._showLoaderSubject.asObservable();
  products: any;
  private _userIdSubject = new Subject();
  userId = this._userIdSubject.asObservable();

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.userId.subscribe(_id => {
      this.afAuth.auth.signInAnonymously();
      this.products = af.list('/users/' + _id + '/suggestions');
    });
  }

  setUserId(userId: string) {
    this._userIdSubject.next(userId);
  }

  addProduct(productName: string) {
    if (productName.length === 0) {
      return;
    }
    let _prod = {
      name: productName,
      status: 'created',
      created: new Date().toISOString()
    };
    this.products.push(_prod);
  }

  removeProduct(product: any) {
    this.products.remove(product.$key);
  }

  acceptSuggestion(suggestion: any) {
    let acceptedSuggestion = suggestion;
    acceptedSuggestion.status = 'accepted';
    this.products.update(acceptedSuggestion.$key, acceptedSuggestion);
  }

  acceptAllSuggestions(): void {
    this.products
      .subscribe(_prods => {
        _prods.forEach(_prod => {
          _prod.status = 'accepted'
        });
      });
  }

  rejectSuggestion(suggestion: any) {
    let rejectedProduct = suggestion;
    rejectedProduct.status = 'rejected';
    this.products.update(rejectedProduct.$key, rejectedProduct);
  }

}
