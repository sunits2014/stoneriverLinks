import { Component, OnInit } from '@angular/core';
import { LifeportraitService } from '../lifeportrait.service';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  providers: [LifeportraitService]
})
export class LinksComponent implements OnInit {

  constructor(public getLifeData: LifeportraitService) { }

  ngOnInit() {
  }

  
  public link1: boolean;
  public link2: boolean;
  public selectLifeSuite: string;

  public showList(event) {
    let eventText = event.srcElement.text;
    if(eventText == "Life Portrait"){
      this.link1 = true;
      this.link2 = false;
      this.selectLifeSuite = "portrait";
    }else if(eventText == "Life Suite") {
      this.link1 = false;
      this.link2 = true;
      this.selectLifeSuite = "suite";
    }
  } 

}
