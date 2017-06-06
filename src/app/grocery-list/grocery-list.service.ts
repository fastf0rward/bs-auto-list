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

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.afAuth.auth.signInAnonymously();
    this.products = af.list('/users/3bjh23b5jh2v35jhg23j5/suggestions'); // TODO dynamic user ID
  }

  addProduct(productName: string) {
    if (productName.length === 0) {
      return;
    }
    let _prod = {
      name: productName,
      status: 'created',
      created: new Date()
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
