import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-component',
  templateUrl: './view-component.component.html',
  styleUrls: ['./view-component.component.css']
})
export class ViewComponentComponent implements OnInit {

  @Input() portalObj: object;

  constructor() { }

  ngOnInit() {
    console.log(this.portalObj)
  } 

}
