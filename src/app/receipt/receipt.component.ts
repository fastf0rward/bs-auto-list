import {Component, OnInit, AfterViewInit, ViewChild, Input} from "@angular/core";
import {CameraService} from "./camera.service";

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit, AfterViewInit {

  @ViewChild('videoplayer') videoPlayer: any;
  @ViewChild('canvas') canvas: any;
  public showVideo: any = false;

  private context: any;
  comment: string;
  identifier: string;
  longitude: number;
  latitude: number;
  canvasWidth: number;
  canvasHeight: number;
  canvasOffsetLeft: number;
  canvasOffsetTop: number;
  navHeight: number;
  private constraints: any;
  private preferredDevice: string;

  @Input() width: number;
  @Input() height: number;

  constructor(private cameraService: CameraService) {
  }

  capture() {
    this.context.drawImage(this.videoPlayer.nativeElement, this.canvasOffsetLeft, this.canvasOffsetTop, this.canvasWidth, this.canvasHeight, 0, 0, this.canvasWidth, this.canvasHeight);
    this.showVideo = true;
  }

  getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(x => {
        this.longitude = x.coords.longitude;
        this.latitude = x.coords.latitude;
      });
    }
  }

  saveImage() {
    this.showVideo = false;

    let imgData: any = this.canvas.nativeElement.toDataURL('img/png');

    imgData = imgData.replace('data:image/png;base64,', '');

    let postData: any = JSON.stringify({
      'ImageBase64String': imgData,
      'id': 3,
      'identifier': this.identifier,
      'comment': this.comment,
      'longitude': this.longitude,
      'latitude': this.latitude
    });
  }

  getPreferredDevice(): string {
    if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
      console.log("enumerateDevices() not supported.");
      return;
    }

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
        return false;
      });
  }

  ngOnInit() {

    // select back camera
    this.preferredDevice = this.getPreferredDevice();

    // set camera constraints
    this.constraints = {
      video: {
        optional: [{sourceId: this.preferredDevice}]
      }
    };

    this.width = 500 / 240 * 320;
    this.height = 500;
    this.canvasWidth = 240;
    this.canvasHeight = 464;

    this.navHeight = 57;

    this.canvasOffsetLeft = 0.5 * this.width - 0.5 * this.canvasWidth;
    this.canvasOffsetTop = (this.height - this.canvasHeight) * 0.5;
  }

  ngAfterViewInit() {
    // Get current geolocation
    //this.getGeolocation();

    this.context = this.canvas.nativeElement.getContext('2d');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia(this.constraints)
        .then(stream => {
          this.videoPlayer.nativeElement.src = window.URL.createObjectURL(stream);
          this.videoPlayer.nativeElement.play();
        });
    }
  }

}
