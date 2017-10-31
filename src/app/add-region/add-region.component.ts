import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.css']
})
export class AddRegionComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }

  public routeTitle: any;
  public headerText: string;
  ngOnInit() {
    this.routeTitle = this.route.snapshot.data;
    this.headerText = this.routeTitle.title;
  }
}
