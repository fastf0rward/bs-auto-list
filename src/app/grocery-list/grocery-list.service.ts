import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class GroceryListService {

  _showLoaderSubject = new BehaviorSubject(false);
  showLoader = this._showLoaderSubject.asObservable();
  products: FirebaseListObservable<any[]>;
  private userIdSubject = new BehaviorSubject(undefined);
  userId = this.userIdSubject.asObservable();

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.userId.subscribe(_id => {
      if (_id) {
        this.afAuth.auth.signInAnonymously();
        this.products = af.list('/users/' + _id + '/suggestions');
        // TODO loader
      }
    });
  }

  setUserId(userId: string) {
    this.userIdSubject.next(userId);
  }

  addProduct(productName: string) {
    if (productName.length === 0) {
      return;
    }
    let _prod = {
      name: productName,
      status: 'created',
      created: new Date().toDateString()
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
