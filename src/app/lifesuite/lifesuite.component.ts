import { Component, OnInit } from '@angular/core';
import { LifeportraitService } from '../lifeportrait.service';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-lifesuite',
  templateUrl: './lifesuite.component.html',
  styleUrls: ['./lifesuite.component.css'],

})
export class LifesuiteComponent implements OnInit {

  // public linkValue;

  constructor(public elm: ElementRef) { 
    // this.linkValue = elm.nativeElement;
    // console.log(this.linkValue);
  }

  ngOnInit() {
    // this.getLifeData.getLifeSuite().subscribe(result => this.lifeSuiteArray = result);
  }

  public lifeSuiteArray = [];

  public showTable: string;
  public showRegionData(index) {
    this.showTable = index.title;
  }

  public clicked: boolean;
  public closeWindow() {
    this.showTable = "";
    this.clicked = false;
  }

  public showCopied: boolean;
  public copyLink(event) {
    const selection = getSelection();    
    const range = document.createRange();

    range.selectNodeContents(event);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');  
    this.showCopied = true;
    setInterval(() => {
      this.showCopied = false;
    },1000);
  }
}
