import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from '../region.service';
import { HostListener } from '@angular/core/src/metadata/directives';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { animate, state, transition, trigger, style } from '@angular/animations';
import { concat } from 'rxjs/operator/concat';
import { concatAll } from 'rxjs/operator/concatAll';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css'],
  providers: [RegionService]
})
export class AddRegionComponent implements OnInit, AfterContentChecked {
  public deleteBtn: any;

  constructor(public route: ActivatedRoute, public regiondata: RegionService, public _router: Router, public fb: FormBuilder) {
    this.selectedRegion = {};
    this.selectedRegion.title = "";
    this.selectedRegion.desc = "";
    this.selectedRegion.link = [{ "title": "" }, { "link": "" }];
    this.selectedRegion.link[0].link = "";
  }

  public regionDataForm: FormGroup;
  public updateClicked: boolean;
  public routeTitle: any;
  public headerText: string;
  public portals = [];
  public onSelection: boolean;
  public link1: string;
  public link2: string;

  //Returning the Form Array Default Control
  get serverDetails(): FormArray {
    return <FormArray>this.regionDataForm.get('serverDetails');
  }

  ngOnInit() {
    this.routeTitle = this.route.snapshot.data;
    this.headerText = this.routeTitle.title;
    this.regiondata.getPortalData().subscribe(result => this.portals = result);
    this.onSelection = true;
    if (this._router.url == "/stoneriver/updateData") {
      this.updateClicked = true;
    } else {
      this.updateClicked = false;
    }
    this.regionDataForm = this.fb.group({
      serverDetails: this.fb.array([this.addServerDetails()])
    });
    this.updateSelected = true;
  }

  //Adding the template to the Form Array
  public addServerDetails(): FormGroup {
    return this.fb.group({
      server: new FormControl(null),
      serverName: new FormControl(null),
      address: new FormControl(null)
    })
  }

  //Looping through the Form Array Control on demand
  public addRow(event) {
    // if (event.srcElement.value != "") {
    //   this.serverDetails.push(this.addServerDetails());
    // } else if (event.srcElement.value == "") {
    //   this.serverDetails.controls.splice(this.serverDetails.controls.indexOf(event), 1);
    // };
    if(this.onSelection != true) {
      this.serverDetails.push(this.addServerDetails());
    }
  }

  ngAfterContentChecked() {
    if (this._router.url == "/stoneriver/updateData" && this.selectedPortal != null && this.selectedRegion.title != "") {
      this.onSelection = false;
    } else if (this._router.url == "/stoneriver/addData" && this.selectedPortal != null) {
      this.onSelection = false;
    };
    if(this.selectedRegion.title != "") {
      this.updateSelected = false;
    }
  }

  public addPortal: boolean;
  public addRegion: boolean;

  public modalOpenValue: string;
  public selectedPortalObj: object;
  public openForm(event) { 
    this.addPortal = true;
    if(event.target.id == "addnewportal") {      
      this.modalOpenValue = "addClicked";
    }else if(event.target.id == "deleteportal") {
      this.selectedPortalObj = {portalArray:[this.portals]};
      this.modalOpenValue = "deleteClicked";
      this.deleteBtn = {title: event.target.id, obj: this.selectedRegion};
    }
  }

  public openNewRegionForm() {
    this.addRegion = true;
  }

  public selectedPortal: any = null;
  getvalue() {
    this.updateSelected = true;
  }

  public selectedRegion: any;
  getRegion() {
    console.log(this.selectedRegion);
  }

  public closeModalPop(boolValue) {
    this.addPortal = boolValue;
  }
  
  public deleteClicked: boolean;
  public getProperties: object;
  public portalIndexClicked: any;
  public getDialogBoolValue(event){
    this.deleteClicked = event.boolValue;
    this.getProperties = event.title;
    console.log(event);
    this.portalIndexClicked = event.clickIndex;
  }

  public closeDialog(event) {
    this.deleteClicked = event;
  }
  // public getNewObj(event) {
  //   console.log(event);
  //   // this.portals = event;
  // }

  public updateSelected: boolean;
  public deleteRegion(event) {
    console.log(this.selectedRegion);
    this.deleteClicked = true;
    this.getProperties = this.selectedRegion.title;
    this.deleteBtn = {title: event.target.id, obj: this.selectedRegion};;
  }

  public addRegionData() {
    let saveObj: object = {
      selPortal: this.selectedPortal,
      regionTitle: this.selectedRegion.title,
      regionDesc: this.selectedRegion.desc,
      regionLink: this.link1,
      regionAltLink: this.link2,
      serverData: this.regionDataForm.controls['serverDetails'].value
    }
    console.log(saveObj);
  }
}
