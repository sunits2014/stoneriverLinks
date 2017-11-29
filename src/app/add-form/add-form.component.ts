import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { Portal } from '../models/models';
import { APIService } from '../region.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddFormComponent implements OnInit, AfterContentChecked {
  @Output() closeModalOutput: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteObj: EventEmitter<any> = new EventEmitter();
  @Output() dialogBoolValue: EventEmitter<any> = new EventEmitter();
  @Input() modalValue: string;
  @Input() selectedPortalObj: any;

<<<<<<< HEAD
  constructor(public apiservice: APIService) { }
=======
  public addPortal: boolean;
  public newPortal: string;
  public blankInput: boolean;
  public switchForm: string;
  constructor() { }
>>>>>>> 36dfa244c581e6586849d505ec35490ac7915a57

  ngOnInit() {
  }

  ngAfterContentChecked() {
    if (this.modalValue === 'addClicked') {
      this.switchForm = 'addForm';
    }else if (this.modalValue === 'deleteClicked') {
      this.switchForm = 'deleteForm';
    }
    console.log(this.selectedPortalObj);
  }


<<<<<<< HEAD
  
  public addPortal: boolean;  
  public newPortal: string; 
  public responseInput: boolean;
  public responseText: string;
  public responseStyle: object;
  public UIResponseObject: object;
  public addNewPortal() {
    debugger;
    if (this.newPortal == null || "") {
      this.responseInput = true;
    }
    else {
      
      // this.portals.push({ 'title': this.newPortal });
      var UIrequest = {
        Portal: {}
      };
      UIrequest.Portal = new Portal(this.newPortal);
      this.apiservice.addPortal(UIrequest).subscribe(response => {
        if(response.Status != null && !response.Status.IsError) {
          this.apiservice.Portals.push(response.Portal);
          this.responseInput = true;
          this.responseText = this.newPortal + " added successfully";
          this.responseStyle = {
            color: 'green'
          }
          this.newPortal = "";
          setTimeout(() => {
            this.responseText = ""
          },3000)
        }
      });
=======
  public addNewPortal() {
    if (this.newPortal == null || '') {
      this.blankInput = true;
    } else {
      // this.portals.push({ 'title': this.newPortal });
      this.newPortal = '';
>>>>>>> 36dfa244c581e6586849d505ec35490ac7915a57
    }
  }

  public closeModal() {
    this.closeModalOutput.emit(false);
    this.responseInput = false;
  }

<<<<<<< HEAD
  public delObj(portalObject) {
    debugger;
    // this.dialogBoolValue.emit({clickIndex: portalObject, boolValue:true, title: portalObject.Portal_Name});
    var UIrequest = {
      Portal: portalObject
    };
    this.apiservice.deletePortal(UIrequest).subscribe(response => {
      if(response.Status != null && !response.Status.IsError) {
        this.apiservice.Portals.splice(this.apiservice.Portals.indexOf(portalObject),1);        
      }
    });
=======
  public delObj(event) {
    this.dialogBoolValue.emit({clickIndex: event, boolValue: true, title: event.title});
>>>>>>> 36dfa244c581e6586849d505ec35490ac7915a57
  }

}
