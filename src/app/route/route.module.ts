import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from '../links/links.component';
import { LifeportraitComponent } from '../lifeportrait/lifeportrait.component';
import { LifesuiteComponent } from '../lifesuite/lifesuite.component';
import { HomeComponent } from '../home/home.component';
import { AddRegionComponent } from '../add-region/add-region.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "stoneriver" },
  {
    path: "stoneriver",
    component: LinksComponent, children: [
      { path: "", redirectTo: "home", pathMatch: 'full' },
      { path: "home", component: HomeComponent, data: {title: "Home"} },      
      { path: "lifeportrait", component: LifeportraitComponent, data: {title: "Life Portrait"} },
      { path: "lifesuite", component: LifesuiteComponent, data: {title: "Life Suite"} },
      { path: "addData", component: AddRegionComponent, data: {title: "Add Region Data"} },
      { path: "updateData", component: AddRegionComponent, data: {title: "Update Region Data"} },
      { path: "deleteData", component: AddRegionComponent, data: {title: "Delete Region Data"} }
    ]
  }

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class RouteModule { }
