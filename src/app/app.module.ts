import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {MaterialModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import "hammerjs";
import {AppComponent} from "./app.component";
import {GroceryListComponent} from "./grocery-list/grocery-list.component";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {FlexLayoutModule} from "@angular/flex-layout";
import {GroceryListService} from "./grocery-list/grocery-list.service";
import {ShopComponent} from "./shop/shop.component";
import {ReceiptComponent} from "./receipt/receipt.component";
import {CameraService} from "./receipt/camera.service";
import {ReceiptService} from "./receipt/receipt.service";
import {ReceiptExplanationDialogComponent} from "./receipt/receipt-explanation-dialog.component";
import {GroceryListExplanationDialogComponent} from "./grocery-list/grocery-list-explanation-dialog.component";
import {ShopExplanationDialogComponent} from "./shop/shop-explanation-dialog.component";
import {OfferListExplanationDialogComponent} from "./offer-list/offer-list-explanation-dialog.component";
import {OfferListComponent} from "./offer-list/offer-list.component";
import {OfferListService} from "./offer-list/offer-list.service";
import {AngularFireModule} from "angularfire2";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "angularfire2/database/database.module";
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {AdminComponent} from "./admin/admin.component";
import {AdminAuthComponent} from "./admin-auth/admin-auth.component";
import {AdminDataService} from "./admin/admin-data.service";
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { EditUserSuggestionsComponent } from './admin/edit-user-suggestions/edit-user-suggestions.component';

const appRoutes: Routes = [
  {path: 'receipt', component: ReceiptComponent},
  {path: 'grocery-list/:user_id', component: GroceryListComponent},
  {path: 'offer-list', component: OfferListComponent},
  {path: 'shop', component: ShopComponent},
  {path: 'admin-auth', component: AdminAuthComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/users/:user_id', component: EditUserComponent},
  {path: 'admin/users/:user_id/suggestions', component: EditUserSuggestionsComponent},
  {path: '', redirectTo: '/grocery-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  entryComponents: [
    ReceiptExplanationDialogComponent,
    GroceryListExplanationDialogComponent,
    OfferListExplanationDialogComponent,
    ShopExplanationDialogComponent
  ],
  declarations: [
    AppComponent,
    GroceryListComponent,
    OfferListComponent,
    PageNotFoundComponent,
    ShopComponent,
    ReceiptComponent,
    ReceiptExplanationDialogComponent,
    GroceryListExplanationDialogComponent,
    OfferListExplanationDialogComponent,
    ShopExplanationDialogComponent,
    AdminComponent,
    AdminAuthComponent,
    EditUserComponent,
    EditUserSuggestionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(), // TODO shift back to importing single Material Components instead of everything
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    GroceryListService,
    OfferListService,
    CameraService,
    ReceiptService,
    AngularFireAuth,
    AngularFireDatabase,
    AdminDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
