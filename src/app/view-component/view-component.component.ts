import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  @Input() portalObj: any;

  constructor() { }

  ngOnInit() {
  } 
  public serverInfoArray = [];

  public getRegionDetailsData(regionInfo) {
    this.serverInfoArray = regionInfo.RegionDetails;
  }

  public copyLink(serverInfo, linkContext) {
    // linkContext = serverInfo.Link;
    const selection = getSelection();    
    const range = document.createRange();

    range.selectNodeContents(linkContext);
    console.log(linkContext);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
  }
}
