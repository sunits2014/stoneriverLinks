import { Component, OnInit } from '@angular/core';
import { LifeportraitService } from '../lifeportrait.service';
import { animate, state, transition, trigger, style } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  providers: [LifeportraitService],
  animations: [
    trigger('fadeAnim',[
      transition(':enter',[
        style({ top: '0%' }),
        animate('150ms', style({ top: '105%' }))
      ]),
      transition(':leave',[
        style({ opacity: '1'}),
        animate('150ms', style({ opacity: '0'}))
      ])
    ])
  ]  
})
export class LinksComponent implements OnInit {

  constructor(public getLifeData: LifeportraitService, public _route: Router) { }

  ngOnInit() {
    let routeText = this._route.url;
    if(routeText == "/stoneriver/addData") {
      this.spanText = "Add Data";
    }else if(routeText == "/stoneriver/updateData") {
      this.spanText = "Update Data";
    }else if(routeText == "/stoneriver/deleteData") {
      this.spanText = "Delete Data"
    }else {
      this.spanText = "Manage Data"
    }
  }


  public link1: boolean;
  public link2: boolean;
  public selectLifeSuite: string;
  public spanText: string = "";

  public noMenu: boolean;
  public onMenuOpen: boolean;
  public showMenu() {
    this.noMenu = !this.noMenu;
    this.onMenuOpen = true;
  }

  public hideMenu() {
    if (this.noMenu == true) {
      this.noMenu = false;
      this.onMenuOpen = false;
    }
  }

  public getTitle(event) {
    if (event.srcElement.text == "Add Data" || event.srcElement.text == "Update Data" || event.srcElement.text == "Delete Data") {
      this.noMenu = false;
      this.onMenuOpen = false;
      this.spanText = event.srcElement.text;
    }
    else {
      this.spanText = "Manage Data"
    }
  }

}
