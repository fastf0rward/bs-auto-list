import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {AdminDataService} from "../admin-data.service";
import {GroceryListService} from "../../grocery-list/grocery-list.service";

@Component({
  selector: 'app-edit-user-suggestions',
  templateUrl: './edit-user-suggestions.component.html',
  styleUrls: ['./edit-user-suggestions.component.scss']
})
export class EditUserSuggestionsComponent implements OnInit {

  suggestions: any[] = [];
  batchExport: string;

  constructor(private route: ActivatedRoute, public adminData: AdminDataService, public groceryListService: GroceryListService) {
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

    adminData.batchExport.subscribe(_batch => {
      this.batchExport = _batch;
    });
  }

  ngOnInit() {
  }

}
