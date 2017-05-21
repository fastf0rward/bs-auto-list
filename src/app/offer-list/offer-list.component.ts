import {Component, OnInit} from "@angular/core";
import {OfferListService} from "./offer-list.service";
import * as _ from "lodash";
import {MdDialog, MdIconRegistry} from "@angular/material";
import {OfferListExplanationDialogComponent} from "./offer-list-explanation-dialog.component";
import {DomSanitizer, SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  products: any[];
  suggestions: any[];
  showLoader: boolean;

  constructor(public offerListService: OfferListService, private dialog: MdDialog, private mdIconRegistry: MdIconRegistry, private domSanitizer: DomSanitizer) {
    this.offerListService.products.subscribe(_products => {
      this.products = _products;
      this.suggestions = _.filter(_products, {suggested: true, accepted: false});
    });
    this.offerListService.showLoader.subscribe(_show => {
      this.showLoader = _show;
    });

    // reset loader
    this.offerListService._showLoaderSubject.next(true);

    let ahLogo: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('assets/ah_logo.svg');
    let jumboLogo: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('assets/jumbo_logo.svg');
    let coopLogo: SafeResourceUrl = this.domSanitizer.bypassSecurityTrustResourceUrl('assets/coop_logo.svg');

    mdIconRegistry.addSvgIcon('ah_logo', ahLogo);
    mdIconRegistry.addSvgIcon('jumbo_logo', jumboLogo);
    mdIconRegistry.addSvgIcon('coop_logo', coopLogo);
  }

  ngOnInit() {
    let dialogRef = this.dialog.open(OfferListExplanationDialogComponent);
    dialogRef.afterClosed().subscribe(() => {
      this.offerListService._showLoaderSubject.next(false);
    });
  }


}
