import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Router} from "@angular/router";
import {Http} from "@angular/http";

@Injectable()
export class AdminDataService {

  data: any;
  currentUser: any;
  currentUserStats: any;
  currentSuggestions: any;
  goBackLink: string;

  private shortifyEndpoint = 'http://shortify.site/api/url/shorten/?url=';

  constructor(private af: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router, private http: Http) {
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
      stats: []
    };
    this.data.push(newUser);
  }

  updateUser(_user) {
    this.data.update(_user.$key, _user);
  }

  setCurrentUser(_userId: string) {
    this.currentUser = this.af.object('users/' + _userId);
    this.currentUserStats = this.af.list('users/' + _userId + '/stats');
  }

  setCurrentSuggestions(_userId: string) {
    this.currentSuggestions = this.af.list('users/' + _userId + '/suggestions');
  }

  addSuggestion(_name) {
    if (_name) {
      let newSuggestion = {
        dateCreated: new Date().toISOString(),
        name: _name,
        suggested: true
      };
      this.currentSuggestions.push(newSuggestion);
    }
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
    let userUrl = window.location.hostname + '/grocery-list/' + _key;

    return this.http.get(this.shortifyEndpoint + userUrl)
      .map(_data => {
        let _url = _data['_body'].substr(2);
        return _url || userUrl;
      });
  }

}
