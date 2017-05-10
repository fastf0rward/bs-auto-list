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

const appRoutes: Routes = [
  {path: 'grocery-list', component: GroceryListComponent},
  {path: '', redirectTo: '/grocery-list', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    GroceryListComponent,
    PageNotFoundComponent
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
