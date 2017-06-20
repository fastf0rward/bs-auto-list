import {Component} from "@angular/core";
import {GroceryListService} from "./grocery-list/grocery-list.service";
import {Router} from "@angular/router";
import {AdminDataService} from "./admin/admin-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userId: string;
  isAdminSubView: boolean;
  isUserView: boolean;

  constructor(private groceryListService: GroceryListService, private router: Router, public adminData: AdminDataService) {
    this.groceryListService.userId.subscribe(_id => {
      this.userId = _id;
    });

    router.events.subscribe((urlInfo: any) => {
      this.isAdminSubView = urlInfo.url.includes('admin/');
      this.isUserView = urlInfo.url.includes('admin') == false;
    });
  }
}
