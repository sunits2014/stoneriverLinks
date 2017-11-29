import { Component, OnInit } from '@angular/core';
import { LifeportraitService } from '../lifeportrait.service';


@Component({
  selector: 'app-lifeportrait',
  templateUrl: './lifeportrait.component.html',
  styleUrls: ['./lifeportrait.component.css', '../links/links.component.css']
})
export class LifeportraitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.getLifeData.getLIfePortrait().subscribe(result => this.lifePortraitArray = result);
  }

  public lifePortraitArray = [];

}
