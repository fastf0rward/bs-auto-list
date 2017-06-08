import {Component, OnInit} from "@angular/core";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    afAuth.authState.subscribe((_isAuth) => {
      if (!_isAuth) {
        router.navigate(['/admin-auth']);
      }
    });
  }

  ngOnInit() {
  }

}
