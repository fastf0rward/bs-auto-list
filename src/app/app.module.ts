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

const appRoutes: Routes = [
  {path: 'receipt', component: ReceiptComponent},
  {path: 'grocery-list', component: GroceryListComponent},
  {path: 'shop', component: ShopComponent},
  {path: '', redirectTo: '/receipt', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  entryComponents: [
    ReceiptExplanationDialogComponent,
    GroceryListExplanationDialogComponent
  ],
  declarations: [
    AppComponent,
    GroceryListComponent,
    PageNotFoundComponent,
    ShopComponent,
    ReceiptComponent,
    ReceiptExplanationDialogComponent,
    GroceryListExplanationDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(), // TODO shift back to importing single Material Components instead of everything
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule
  ],
  providers: [
    GroceryListService,
    CameraService,
    ReceiptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
