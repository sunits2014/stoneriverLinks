import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HashLocationStrategy, Location, LocationStrategy} from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { RouteModule } from './route/route.module';
import { Router } from '@angular/router';
import { LifeportraitComponent } from './lifeportrait/lifeportrait.component';
import { LifesuiteComponent } from './lifesuite/lifesuite.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    LifeportraitComponent,
    LifesuiteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouteModule,
    HttpModule
  ],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
