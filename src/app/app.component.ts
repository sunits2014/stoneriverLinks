import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  public ifIE: boolean;
  public noIE: boolean;

  ngOnInit() {
    let navigateIE = navigator.userAgent;
    if (navigateIE == "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729; rv:11.0) like Gecko") {
      this.ifIE = true;
      this.noIE = false;
    }else {
      this.ifIE = false;
      this.noIE = true;
    }
  }

}
