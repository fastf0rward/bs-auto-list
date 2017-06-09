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
  private stats: any;
  private _userIdSubject = new Subject<string>();
  userId = this._userIdSubject.asObservable();

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.userId.subscribe(_id => {
      this.afAuth.auth.signInAnonymously();
      this.products = af.list('/users/' + _id + '/suggestions', {
        query: {
          orderByChild: 'created'
        }
      });
      this.stats = af.list('/users/' + _id + '/stats');
      this.logClickedLink();
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
      dateCreated: new Date().toISOString()
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

  updateProduct(product: any) {
    this.products.update(product.$key, product);
  }

  private logClickedLink() {
    let _stat = {
      dateCreated: new Date().toISOString(),
      description: 'Clicked link',
      color: 'accent'
    };
    this.stats.push(_stat);
  }

  logWentShopping() {
    let _stat = {
      dateCreated: new Date().toISOString(),
      description: 'Went shopping',
      color: 'accent'
    };
    this.stats.push(_stat);
  }

}
