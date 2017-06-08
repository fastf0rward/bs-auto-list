import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Router} from "@angular/router";

@Injectable()
export class AdminDataService {

  data: any;
  currentUser: any;
  currentSuggestions: any;
  goBackLink: string;

  constructor(private af: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe((_isAuth) => {
      if (_isAuth) {
        this.data = af.list('/users', {
          query: {
            orderByChild: 'created'
          }
        });
      }
    });
  }

  addUser() {
    let newUser = {
      email: 'someone@somewhere.nl',
      dateCreated: new Date().toISOString(),
      suggestions: [],
    };
    this.data.push(newUser);
  }

  updateUser(_user) {
    this.data.update(_user.$key, _user);
  }

  setCurrentUser(_userId: string) {
    this.currentUser = this.af.object('users/' + _userId);
  }

  setCurrentSuggestions(_userId: string) {
    this.currentSuggestions = this.af.list('users/' + _userId + '/suggestions');
  }

  addSuggestion(_name) {
    let newSuggestion = {
      dateCreated: new Date().toISOString(),
      name: _name,
      suggested: true
    };
    this.currentSuggestions.push(newSuggestion);
  }

  addBatchSuggestions(_batchStr: string) {
    if (_batchStr) {
      let _split: string[] = _batchStr.split('\n');
      _split.forEach(_name => {
        this.addSuggestion(_name);
      });
    }
  }

  removeSuggestion(_key) {
    if (_key) {
      this.currentSuggestions.remove(_key);
    }
  }

  setGoBackLink(_link) {
    this.goBackLink = _link;
  }

  goBack() {
    if (this.goBackLink) {
      this.router.navigate([this.goBackLink]);
    }
  }

  getUserUrl(_key) {
    return window.location.hostname + '/grocery-list/' + _key;
  }

}
