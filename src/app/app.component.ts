import {Component} from "@angular/core";
import {GroceryListService} from "./grocery-list/grocery-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userId: string;
  isUserView: boolean;

  constructor(private groceryListService: GroceryListService, private router: Router) {
    this.groceryListService.userId.subscribe(_id => {
      this.userId = _id;
    });

    router.events.subscribe((urlInfo: any) => {
      this.isUserView = urlInfo.url.includes('admin') == false;
    });
  }
}
