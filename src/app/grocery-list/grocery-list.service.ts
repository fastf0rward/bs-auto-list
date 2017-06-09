import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {AngularFireDatabase} from "angularfire2/database/database";
import {Subject} from "rxjs";
import {FirebaseListObservable} from "angularfire2/database/firebase_list_observable";

@Injectable()
export class GroceryListService {

  _showLoaderSubject = new BehaviorSubject(true);
  showLoader = this._showLoaderSubject.asObservable();
  products: FirebaseListObservable<any>;
  private stats: any;
  private _userIdSubject = new Subject<string>();
  userId = this._userIdSubject.asObservable();

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.userId.subscribe(_id => {
      afAuth.authState.subscribe(_user => {
        if (!_user) {
          this.afAuth.auth.signInAnonymously();
        }
        if (_user && _user.isAnonymous) {
          this.logClickedLink();
        }
      });
      // always load the suggestions
      this.loadData(_id);
    });
  }

  private loadData(_id: string) {
    this.products = this.af.list('/users/' + _id + '/suggestions', {
      query: {
        orderByChild: 'created'
      }
    });
    this.stats = this.af.list('/users/' + _id + '/stats');
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
        _prods
          .filter(_prod => _prod.suggested && _prod.status !== 'accepted' && _prod.status !== 'rejected')
          .forEach(_prod => {
            _prod.status = 'accepted';
            this.updateProduct(_prod);
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
