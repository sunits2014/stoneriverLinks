import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LinksComponent } from '../links/links.component';
import { LifeportraitComponent } from '../lifeportrait/lifeportrait.component';
import { LifesuiteComponent } from '../lifesuite/lifesuite.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "stoneriver" },
  {
    path: "stoneriver",
    component: LinksComponent, children: [
      { path: "", redirectTo: "home", pathMatch: 'full' },
      { path: "home", component: HomeComponent },      
      { path: "lifeportrait", component: LifeportraitComponent },
      { path: "lifesuite", component: LifesuiteComponent }
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
