import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AdminDataService} from "../admin-data.service";

@Component({
  selector: 'app-edit-user-suggestions',
  templateUrl: './edit-user-suggestions.component.html',
  styleUrls: ['./edit-user-suggestions.component.css']
})
export class EditUserSuggestionsComponent implements OnInit {

  suggestions: any[] = [];

  constructor(private route: ActivatedRoute, public adminData: AdminDataService) {
    this.route.params.subscribe(_params => {
      let _userId = _params['user_id'];
      if (_userId) {
        adminData.setCurrentSuggestions(_userId);
        adminData.currentSuggestions.subscribe(_suggestions => {
          this.suggestions = _suggestions;
        });
        adminData.setGoBackLink('/admin/users/' + _userId);
      }
    });
  }

  ngOnInit() {
  }

}
