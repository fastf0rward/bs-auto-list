import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, Response, RequestMethod} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class CameraService {
  serviceUrl: any = 'http://localhost:61169/api/image';

  constructor(private http: Http) {
  }

  saveImage(imageData: string) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers, method: RequestMethod.Post});

    // TODO store image somewhere
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: Response) {
    console.error('Error in the DepartureScheduleService');
    return Observable.throw(error.json().error || 'Server error');
  }
}
