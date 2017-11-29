import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Portal } from './models/models';

@Injectable()
export class APIService {

  public headers = new Headers({ 'Content-Type': 'application/json' });

  // public regionURL = 'assets/portaldata.json';
  // public regionURL = "http://localhost/SR_WebApi/Start/GetApplicationContents";
  private APIURL = "http://inlt990.sapiens.int/SR_WebApi/Data/";
  public getRegionCall = this.APIURL + "GetPortals";
  public addPortalCall = this.APIURL + "AddPortal";
  public deletePortallCall = this.APIURL + "DeletePortal";
  public addRegionCall = this.APIURL + "AddRegion";

  public Portals: Portal[];

  constructor(public _http: Http) { }

  getPortalData() {
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.getRegionCall, { headers: this.headers }).map(response => response.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addPortal(request) {
    return this._http.post(this.addPortalCall, request, { headers: this.headers }).map(response => response.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  deletePortal(request) {
    return this._http.post(this.deletePortallCall, request, { headers: this.headers }).map(response => response.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  addRegion(request) {
    return this._http.post(this.addRegionCall, request, { headers: this.headers }).map(response => response.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
  
}
