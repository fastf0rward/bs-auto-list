import {Component, OnInit, AfterViewInit, ViewChild, Input, ElementRef} from "@angular/core";
import {SafeUrl} from "@angular/platform-browser";
import {ReceiptService} from "./receipt.service";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit, AfterViewInit {

  canvasWidth: number;
  canvasHeight: number;
  canvasOffsetLeft: number;
  canvasOffsetTop: number;
  navHeight: number;
  private constraints: any;
  private preferredDevice: string;
  mediaDevicesSupported: boolean = true;
  receiptPreviewUrl: SafeUrl;

  @Input() width: number;
  @Input() height: number;

  @ViewChild('uploadButton') uploadButton: ElementRef;

  constructor(private receiptService: ReceiptService) {
    this.receiptService.receiptPreview.subscribe(_receipt => {
      this.receiptPreviewUrl = _receipt;
    });
  }

  checkSupportMediaDevices(): boolean {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices || !navigator.mediaDevices.getUserMedia) {
      console.log("Latest MediaDevices API not supported.");
      this.mediaDevicesSupported = false;
    } else {
      this.mediaDevicesSupported = true;
    }

    return this.mediaDevicesSupported;
  }

  getPreferredDevice(): string {
    // List cameras and microphones.
    navigator.mediaDevices.enumerateDevices()
      .then(function (devices) {
        devices.forEach(function (device) {
          console.log(device.kind + ": " + device.label +
            " id = " + device.deviceId);
        });
        return devices[0];
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
        return;
      });

    return 'default';
  }

  ngOnInit() {
    // revert to HTML5 input field in case MediaDevices are not supported in browser
    if (this.checkSupportMediaDevices()) {
      // select back camera
      this.preferredDevice = this.getPreferredDevice();
      // set camera constraints
      this.constraints = {
        video: {
          optional: [{sourceId: this.preferredDevice}]
        }
      };
    }

    this.width = 500 / 240 * 320;
    this.height = 500;
    this.canvasWidth = 240;
    this.canvasHeight = 464;
    this.navHeight = 57;
    this.canvasOffsetLeft = 0.5 * this.width - 0.5 * this.canvasWidth;
    this.canvasOffsetTop = (this.height - this.canvasHeight) * 0.5;
  }

  ngAfterViewInit() {
    this.uploadButton.nativeElement.click();
  }

}
