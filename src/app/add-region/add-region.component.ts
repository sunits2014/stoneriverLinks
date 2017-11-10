import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegionService } from '../region.service';
import { HostListener } from '@angular/core/src/metadata/directives';

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
    this.selectedRegion.link = [{ "title": "" }, { "link": "" }];
    this.selectedRegion.link[0].link = "";
  }

  public onAdd: boolean;

  public routeTitle: any;
  public headerText: string;
  public portals = [];
  ngOnInit() {
    this.routeTitle = this.route.snapshot.data;
    this.headerText = this.routeTitle.title;
    this.regiondata.getPortalData().subscribe(result => this.portals = result);
    this.onAdd = true;
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

  public onScroll(event) {
    console.log(event.target.offsetTop);
  }
}
