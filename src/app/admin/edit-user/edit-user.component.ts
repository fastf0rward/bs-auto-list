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

  constructor(private route: ActivatedRoute, public adminData: AdminDataService) {
    this.route.params.subscribe(_params => {
      let _userId = _params['user_id'];
      if (_userId) {
        adminData.setCurrentUser(_userId);
        adminData.currentUser.subscribe(_user => {
          this.user = _user;
        });
      }
    });
  }

  ngOnInit() {
  }

}
