import {Component, OnInit} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Router} from "@angular/router";
import {AdminDataService} from "./admin-data.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: any[];

  constructor(private afAuth: AngularFireAuth, private router: Router, private adminData: AdminDataService) {
    afAuth.authState.subscribe((_isAuth) => {
      if (!_isAuth) {
        router.navigate(['/admin-auth']);
      } else {
        adminData.data.subscribe((_users) => {
          this.users = _users;
        });
      }
    });
  }

  ngOnInit() {
  }

  addUser() {
    this.adminData.addUser();
  }

}
