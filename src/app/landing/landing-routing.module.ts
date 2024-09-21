import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

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
        path: 'faqs', component:FaqsComponent
      },

      {
        path: 'blogs', component:BlogComponent
      },

      {
        path: 'contact', component:ContactUsComponent
      },

      {
        path: 'gallery', component:GalleryComponent
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
