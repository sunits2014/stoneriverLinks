import { Component, OnInit, OnDestroy, AfterContentChecked } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionService } from '../region.service';
import { HostListener } from '@angular/core/src/metadata/directives';
import { FormGroup, FormControl, FormArray, Validators, FormBuilder } from '@angular/forms';
import { animate, state, transition, trigger, style } from '@angular/animations';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css'],
  providers: [RegionService],
  animations: [
    trigger('slideDown', [
      transition(':enter',[
        style({ 'top': '-100%'}),
        animate('500ms', style({ 'top': '0'}))
      ]),
      transition(':leave',[
        style({ 'top': '0%'}),
        animate('500ms', style({ 'top': '-100%'}))
      ])
    ])
  ]
})
export class AddRegionComponent implements OnInit, AfterContentChecked {

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
    if (event.srcElement.value != "") {
      this.serverDetails.push(this.addServerDetails());
    } else if(event.srcElement.value == ""){
      this.serverDetails.controls.splice(this.serverDetails.controls.indexOf(event), 1);
    }
  }

  ngAfterContentChecked() {
    if (this._router.url == "/stoneriver/updateData" && this.selectedPortal != null && this.selectedRegion.title != "") {
      this.onSelection = false;
    } else if (this._router.url == "/stoneriver/addData" && this.selectedPortal != null) {
      this.onSelection = false;
    }
  }

  public addPortal: boolean;
  public addRegion: boolean;

  public openNewPortalForm() {
    this.addPortal = true;
  }
  public openNewRegionForm() {
    this.addRegion = true;
  }
  public closeModal() {
    this.addPortal = false;
    this.blankInput = false;
  }

  public selectedPortal: any = null;
  getvalue() {
    console.log(this.selectedPortal)
  }

  public selectedRegion: any;
  getRegion() {
    console.log(this.selectedRegion);
  }

  public newPortal: string;
  public blankInput: boolean;
  public addNewPortal() {
    if (this.newPortal == null || "") {
      this.blankInput = true;

    }
    else {
      this.portals.push({ 'title': this.newPortal });
      this.newPortal = "";
    }
  }

  public scrolled: boolean;
  public onScroll(event) {
    let fromTop = event.srcElement.scrollTop;
    if(fromTop > 25) {
      this.scrolled = true;
    }else if(fromTop < 24) {
      this.scrolled = false;
    }
  }
}
