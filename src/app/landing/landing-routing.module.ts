import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { FacilitiesComponent } from './facilities/facilities.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent, children: [
      {
        path: 'about', component:AboutUsComponent
      },

      {
        path: 'home', component:HomeComponent
      },

      {
        path: 'facilities', component:FacilitiesComponent
      },

      {
        path:'', redirectTo:'home', pathMatch:'full'
      }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
