import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AdminDataService} from "../admin-data.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: any = {};
  stats: any = [];

  constructor(private route: ActivatedRoute, public adminData: AdminDataService) {
    adminData.setGoBackLink('/admin');

    this.route.params.subscribe(_params => {
      let _userId = _params['user_id'];
      if (_userId) {
        adminData.setCurrentUser(_userId);
        adminData.currentUser.subscribe(_user => {
          this.adminData.getUserUrl(_user.$key).subscribe(_url => {
            _user.url = _url;
            this.user = _user;
          });
        });
        adminData.currentUserStats.subscribe(_stats => {
          this.stats = _stats;
        });
      }
    });
  }

  ngOnInit() {
  }

}
