import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {

  constructor() { }

  @Input() getClickedProperties: string;
  @Input() selectedPortalObj: any;
  @Input() portalIndex: any;
  @Input() deleteRegionButtonName: any;
  public getProperties: string;
  @Output() closeDialogBoolValue: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteObj: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.getProperties = "Do you really want to delete " + this.getClickedProperties + " ?";
  }

  public closeDialog() {
    this.closeDialogBoolValue.emit(false);
  }

  public confirmDelete() {
    if(this.deleteRegionButtonName.title == "deleteportal") {
      let newObj = [this.selectedPortalObj.portalArray[0].splice(this.selectedPortalObj.portalArray[0].indexOf(this.portalIndex),1)];
      this.deleteObj.emit(newObj);
    }else if(this.deleteRegionButtonName.title == "deleteRegion") {
      console.log(this.deleteRegionButtonName);
    }    
    this.closeDialogBoolValue.emit(false);
  }

}
