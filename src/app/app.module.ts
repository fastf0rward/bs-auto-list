import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
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

const appRoutes: Routes = [
  {path: 'receipt', component: ReceiptComponent},
  {path: 'grocery-list', component: GroceryListComponent},
  {path: 'offer-list', component: OfferListComponent},
  {path: 'shop', component: ShopComponent},
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
    ShopExplanationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
    ReceiptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
