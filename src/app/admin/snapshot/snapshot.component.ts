import {Component, OnInit} from "@angular/core";
import {AdminDataService} from "../admin-data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-snapshot',
  templateUrl: './snapshot.component.html',
  styleUrls: ['./snapshot.component.css']
})
export class SnapshotComponent implements OnInit {

  stats: any[];
  suggestions: any[];
  showLoader: boolean = true;

  constructor(adminData: AdminDataService, private route: ActivatedRoute) {
    this.route.params.subscribe(_params => {
      let _userId = _params['user_id'];
      let _snapshotId = _params['snapshot_id'];
      if (_userId) {
        adminData.setGoBackLink('/admin/users/' + _userId);
      }
      if (_userId && _snapshotId) {
        adminData.setCurrentSnapshot(_userId, _snapshotId).subscribe(() => {
          adminData.currentSnapshotStats.subscribe(_stats => {
            this.stats = _stats;
            this.showLoader = false;
          });
          adminData.currentSnapshotSuggestions.subscribe(_suggestions => {
            this.suggestions = _suggestions;
            this.showLoader = false;
          });
        });
      }
    });
  }

  ngOnInit() {
  }

}
