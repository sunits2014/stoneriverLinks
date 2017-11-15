import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddFormComponent implements OnInit, AfterContentChecked {

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterContentChecked() {
    if(this.modalValue == "addClicked") {
      this.switchForm = "addForm"
    }else if(this.modalValue == "deleteClicked") {
      this.switchForm = "deleteForm"
    }
    console.log(this.selectedPortalObj);
  }

  @Output() closeModalOutput: EventEmitter<boolean> = new EventEmitter();
  @Output() deleteObj: EventEmitter<any> = new EventEmitter();
  @Input() modalValue: string;
  @Input() selectedPortalObj: any[];

  
  public addPortal: boolean;  
  public newPortal: string; 
  public blankInput: boolean;
  public addNewPortal() {
    if (this.newPortal == null || "") {
      this.blankInput = true;
    }
    else {
      // this.portals.push({ 'title': this.newPortal });
      this.newPortal = "";
    }
  }
  public switchForm: string;
  public closeModal() {
    this.closeModalOutput.emit(false);
    this.blankInput = false;
  }

  public delObj(event) {
    let newObj = [this.selectedPortalObj.splice(this.selectedPortalObj.indexOf(event),1)]
    console.log(newObj)
    this.deleteObj.emit(newObj);
  }

}
