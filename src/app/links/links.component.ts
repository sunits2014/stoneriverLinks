import { Component, OnInit } from '@angular/core';
import { LifeportraitService } from '../lifeportrait.service';
import { APIService } from '../region.service';
import { animate, state, transition, trigger, style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  animations: [
    trigger('fadeAnim', [
      transition(':enter', [
        style({ top: '0%' }),
        animate('150ms', style({ top: '105%' }))
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('150ms', style({ opacity: '0' }))
      ])
    ])
  ]
})
export class LinksComponent implements OnInit {
<<<<<<< HEAD
  public onLoad: boolean;
  public homeContent: boolean;
  public viewScreen: boolean;
  public addScreen: boolean;
=======
>>>>>>> 36dfa244c581e6586849d505ec35490ac7915a57
  public portals = [];
  public link1: boolean;
  public link2: boolean;
  public selectLifeSuite: string;
<<<<<<< HEAD
  public spanText: string = "";
  public noMenu: boolean;
  public onMenuOpen: boolean;
  public menuObject: object;

  constructor(public _route: Router, public apiservice: APIService) { }

  ngOnInit() {
    this.homeContent = true;
    let routeText = this._route.url;
    if (routeText == "/stoneriver/home") {
      this.spanText = "Manage Data";
      this.homeContent = true;
      this.viewScreen = false;
      this.addScreen = false;
    } else if(routeText == "/stoneriver/addData") {
      this.spanText = "Add Data";
      this.homeContent = false;
      this.viewScreen = false;
      this.addScreen = true;
    } else if (routeText == "/stoneriver/updateData") {
      this.spanText = "Update Data";
      this.homeContent = false;
      this.viewScreen = false;
      this.addScreen = true;
    } else if (routeText == "/stoneriver/deleteData") {
      this.spanText = "Delete Data"
=======
  public spanText: string;

  public noMenu: boolean;
  public onMenuOpen: boolean;
  constructor(public getLifeData: LifeportraitService, public _route: Router, public regiondata: RegionService) { }

  ngOnInit() {
    const routeText = this._route.url;
    if (routeText === '/stoneriver/addData') {
      this.spanText = 'Add Data';
    } else if (routeText === '/stoneriver/updateData') {
      this.spanText = 'Update Data';
    } else if (routeText === '/stoneriver/deleteData') {
      this.spanText = 'Delete Data';
>>>>>>> 36dfa244c581e6586849d505ec35490ac7915a57
    } else {
      this.spanText = 'Manage Data';
    }
    // debugger;
    // this.regiondata.getPortalData().subscribe(result => console.log(result));
    // this.regiondata.getPortalData().subscribe(result => console.log(result));
    // this.regiondata.getPortalData().subscribe(result => this.portals = result.Portals);
    this.onLoad = true;
    this.apiservice.getPortalData().subscribe(data => {
      this.apiservice.Portals = data.Portals;
      this.onLoad = false;
      console.log(data.Portals)
    }, () => this.onLoad = false);
  }

  public showMenu() {
    this.noMenu = !this.noMenu;
    this.onMenuOpen = true;
  }

  public hideMenu() {
    if (this.noMenu === true) {
      this.noMenu = false;
      this.onMenuOpen = false;
    }
  }

<<<<<<< HEAD
  public getTitle(event,portalObject) {
    debugger;
    if (event.srcElement.text == "Add Data" || event.srcElement.text == "Update Data" || event.srcElement.text == "Delete Data") {
      this.noMenu = false;
      this.onMenuOpen = false;
      this.spanText = event.srcElement.text;
      this.homeContent = false;
      this.viewScreen = false;
      this.addScreen = true;
    }
    else {
      this.spanText = "Manage Data"
      this.homeContent = false;
      this.viewScreen = true;
      this.addScreen = false;
=======
  public getTitle(event) {
    if (event.srcElement.text === 'Add Data' || event.srcElement.text === 'Update Data' || event.srcElement.text === 'Delete Data') {
      this.noMenu = false;
      this.onMenuOpen = false;
      this.spanText = event.srcElement.text;
    } else {
      this.spanText = 'Manage Data';
>>>>>>> 36dfa244c581e6586849d505ec35490ac7915a57
    }
    this.homeContent = false;
    this.menuObject = portalObject
  }
}
