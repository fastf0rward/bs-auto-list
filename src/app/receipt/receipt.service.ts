import { Injectable } from '@angular/core';
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ReceiptService {

  private defaultUrl: SafeUrl = '';
  _receiptPreview = new BehaviorSubject(this.defaultUrl);
  receiptPreview = this._receiptPreview.asObservable();

  constructor(private sanitizer: DomSanitizer) { }

  updateReceiptPreview(_event) {
    if (_event.srcElement.files && _event.srcElement.files[0]) {
      var file = _event.srcElement.files[0];
      this._receiptPreview.next(this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(file)));
    }
  }

}
