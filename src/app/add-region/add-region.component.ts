import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from '../region.service';
import { HostListener } from '@angular/core/src/metadata/directives';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { animate, state, transition, trigger, style } from '@angular/animations';
import { concat } from 'rxjs/operator/concat';
import { concatAll } from 'rxjs/operator/concatAll';
import { Portal, Region, RegionDetail } from '../models/models';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit, AfterContentChecked {
  public deleteBtn: any;
  public Region: Region;
  public RegionDetail: RegionDetail;
  public Portal: Portal;

  constructor(public route: ActivatedRoute, public apiservice: APIService, public _router: Router, public fb: FormBuilder) {
    this.Region = new Region();
    this.RegionDetail = new RegionDetail();
    this.Portal = new Portal();
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
    this.apiservice.getPortalData().subscribe(result => {
      this.apiservice.Portals = result.Portals;
      console.log(result);
    });
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
      Servers: new FormControl(""),
      ServerName: new FormControl(""),
      Address: new FormControl(""),
      Link: new FormControl("")      
    })
  }

  //Looping through the Form Array Control on demand
  public addRow(event) {
    // if (event.srcElement.value != "") {
    //   this.serverDetails.push(this.addServerDetails());
    // } else if (event.srcElement.value == "") {
    //   this.serverDetails.controls.splice(this.serverDetails.controls.indexOf(event), 1);
    // };
    if (this.onSelection != true) {
      this.serverDetails.push(this.addServerDetails());
    }
  }

  ngAfterContentChecked() {
    if (this._router.url == "/stoneriver/updateData" && this.selectedPortal != null && this.selectedRegion.title != "") {
      this.onSelection = false;
    } else if (this._router.url == "/stoneriver/addData" && this.selectedPortal != null) {
      this.onSelection = false;
    };
    if (this.Region.Region_Name != "") {
      this.onSelection = false;
      this.updateSelected = false;
    }
  }

  public addPortal: boolean;
  public addRegion: boolean;

  public modalOpenValue: string;
  public selectedPortalObj: object;
  public openForm(event) {
    this.addPortal = true;
    if (event.target.id == "addnewportal") {
      this.modalOpenValue = "addClicked";
    } else if (event.target.id == "deleteportal") {
      this.selectedPortalObj = { portalArray: [this.portals] };
      this.modalOpenValue = "deleteClicked";
      this.deleteBtn = { title: event.target.id, obj: this.selectedRegion };
    }
  }

  public openNewRegionForm() {
    this.addRegion = true;
  }

  public selectedPortal: any = null;
  getvalue() {
    this.onSelection = false;
    console.log(this.selectedPortal);
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
  public getDialogBoolValue(event) {
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
    this.deleteBtn = { title: event.target.id, obj: this.selectedRegion };;
  }

  public addRegionData() {
    this.Region.RegionDetails = this.regionDataForm.get('serverDetails').value;
    this.Portal.Regions[0] = this.Region;
    this.Portal.Portal_ID = this.selectedPortal.Portal_ID;
    let saveObj: object = {
      Portal: this.Portal
    }
    console.log(saveObj);
    this.apiservice.addRegion(saveObj).subscribe(response => {
      if (response.Status != null && !response.Status.IsError) {
        console.log(response);
        // this.apiservice.Portals.splice(this.apiservice.Portals.indexOf(portalObject),1);        
      }
    });
    // console.log(saveObj);
    // this.selectedPortal = null;
    // this.selectedRegion.title = null;
    // this.selectedRegion.desc = null;
    // this.regionDataForm.reset();
  }
}
