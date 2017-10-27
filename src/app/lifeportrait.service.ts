import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LifeportraitService {

  public lifeportraitURL = "assets/lifeportrait.json";
  public lifesuiteURL = "assets/lifesuite.json";

  constructor(public _http: Http) { }

  public getLIfePortrait() {
    return this._http.get(this.lifeportraitURL).map(response => response.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  public getLifeSuite() {
    return this._http.get(this.lifesuiteURL).map(response => response.json()).catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
