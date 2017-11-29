import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LinksComponent } from './links/links.component';
import { RouteModule } from './route/route.module';
import { Router } from '@angular/router';
import { LifeportraitComponent } from './lifeportrait/lifeportrait.component';
import { LifesuiteComponent } from './lifesuite/lifesuite.component';
import { HomeComponent } from './home/home.component';
import { AddRegionComponent } from './add-region/add-region.component';
import { AddFormComponent } from './add-form/add-form.component';
import { DialogComponent } from './dialog/dialog.component';
import { BlockUiComponent } from './block-ui/block-ui.component';
import { APIService } from './region.service';
import { ViewComponentComponent } from './view-component/view-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LinksComponent,
    LifeportraitComponent,
    LifesuiteComponent,
    HomeComponent,
    AddRegionComponent,
    AddFormComponent,
    DialogComponent,
    BlockUiComponent,
    ViewComponentComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouteModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    Location, { provide: LocationStrategy, useClass: HashLocationStrategy },
    APIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
