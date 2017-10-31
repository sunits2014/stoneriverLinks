import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css'],
  providers: [RegionService]
})
export class AddRegionComponent implements OnInit {

  constructor(public route: ActivatedRoute, public regiondata: RegionService) { 
    this.selectedRegion = {};
    this.selectedRegion.title = "";
    this.selectedRegion.desc = "";
    this.selectedRegion.link = [{"title":""},{"link":""}];
    this.selectedRegion.link[0].link = "";
  }

  public routeTitle: any;
  public headerText: string;
  public portals = [];
  ngOnInit() {
    this.routeTitle = this.route.snapshot.data;
    this.headerText = this.routeTitle.title;
    this.regiondata.getPortalData().subscribe(result => this.portals = result);
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
  }

  public selectedPortal: string;
  getvalue() {
    console.log(this.selectedPortal)
  }

  public selectedRegion: any;
  getRegion() {
    console.log(this.selectedRegion);
  }

  public newPortal: string;
  public addNewPortal() {
    this.portals.push({'title': this.newPortal});
    this.newPortal = "";
  }
}
