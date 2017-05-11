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

  context: any;
  comment: string;
  identifier: string;
  longitude: number;
  latitude: number;

  @Input() width: number;
  @Input() height: number;

  constructor(private cameraService: CameraService) {
  }

  capture() {
    // this.context = this.canvas.nativeElement.getContext('2d');
    this.context.drawImage(this.videoPlayer.nativeElement, 0, 0, this.width, this.height);
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


  ngOnInit() {
    this.width = 320;
    this.height = 240;
  }

  ngAfterViewInit() {
    // Get current geolocation
    this.getGeolocation();

    this.context = this.canvas.nativeElement.getContext('2d');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({video: true})
        .then(stream => {
          this.videoPlayer.nativeElement.src = window.URL.createObjectURL(stream);
          this.videoPlayer.nativeElement.play();
        });
    }
  }

}
