import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:"", component: HomeComponent
},{
  path:"about", component: AboutUsComponent
}];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
