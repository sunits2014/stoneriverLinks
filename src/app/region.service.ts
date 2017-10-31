import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegionService {

  public regionURL = "assets/portaldata.json";
  constructor(public _http: Http) { }

  getPortalData() {
    return this._http.get(this.regionURL).map(response => response.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
