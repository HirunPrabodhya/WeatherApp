import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './weather/dashboard/dashboard.component';
import { ViewComponent } from './weather/view/view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { empty, urlPath } from './constant/constant';

const routes: Routes = [
  {path:urlPath.dashBoard,component:DashboardComponent},
  {path:urlPath.view,component:ViewComponent},
  {path:empty,redirectTo:urlPath.dashBoard,pathMatch:"full"},
  {path:urlPath.wildCard,component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
