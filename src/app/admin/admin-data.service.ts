import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import * as _ from "lodash";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AdminDataService {

  data: any;
  currentUser: any;
  currentUserStats: any;
  currentSuggestions: any;
  currentUserSnapshots: any;
  currentSnapshot: any;
  currentSnapshotStats: any;
  currentSnapshotSuggestions: any;
  goBackLink: string;
  userId: string;
  private userSnapshot: {};

  private _batchExportSubject = new BehaviorSubject<string>('');
  batchExport = this._batchExportSubject.asObservable();

  private shortifyEndpoint = 'http://shortify.site/api/url/shorten/?url=';

  constructor(private af: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router, private http: Http) {
    afAuth.authState.subscribe((_user) => {
      if (_user && !_user.isAnonymous) {
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
    this.currentUserSnapshots = this.af.list('users/' + _userId + '/history');
    this.userId = _userId;
    this.af.object('/users/' + _userId, {preserveSnapshot: true}).subscribe(_snapshot => {
      this.userSnapshot = _snapshot.val();
    });
  }

  setCurrentSuggestions(_userId: string) {
    this.currentSuggestions = this.af.list('users/' + _userId + '/suggestions');
  }

  setCurrentSnapshot(_userId: string, _snapshotId: string) {
    this.currentSnapshot = this.af.list('users/' + _userId + '/history/' + _snapshotId);
    this.currentSnapshotStats = this.af.list('users/' + _userId + '/history/' + _snapshotId + '/stats');
    this.currentSnapshotSuggestions = this.af.list('users/' + _userId + '/history/' + _snapshotId + '/suggestions');
    return this.currentSnapshot;
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

  removeAllSuggestions() {
    this.currentUser.update({suggestions: {}});
  }

  removeSuggestion(_key) {
    if (_key) {
      this.currentSuggestions.remove(_key);
    }
  }

  snapshotSuggestionsAndStats() {
    if (!_.isEmpty(this.userSnapshot)) {
      // copy old stats and suggestions to history
      let newSnapshot = {
        dateCreated: new Date().toISOString(),
        stats: Object.assign({}, this.userSnapshot['stats']),
        suggestions: Object.assign({}, this.userSnapshot['suggestions'])
      };
      this.currentUserSnapshots.push(newSnapshot);
      // clean current stats
      this.currentUser.update({stats: {}});
    }
  }

  resetAllSuggestions(_suggestions) {
    _suggestions.forEach(_sug => {
      this.resetSuggestion(_sug);
    })
  }

  private resetSuggestion(_suggestion) {
    _suggestion.status = null;
    this.currentSuggestions.update(_suggestion.$key, _suggestion);
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
    let userUrl = window.location.host + '/grocery-list/' + _key;

    return this.http.get(this.shortifyEndpoint + userUrl)
      .map(_data => {
        let _url = _data['_body'].substr(2);
        return _url || userUrl;
      });
  }

  exportBatchSuggestions(_suggestions) {
    let _batch: string = '';
    _suggestions.forEach(_sugg => {
      _batch += _sugg.name + '\n';
    });
    this._batchExportSubject.next(_batch);
  }

}
