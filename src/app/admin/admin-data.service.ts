import {Injectable} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";

@Injectable()
export class AdminDataService {

  data: any;
  currentUser: any;

  constructor(private af: AngularFireDatabase, private afAuth: AngularFireAuth) {
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

}
