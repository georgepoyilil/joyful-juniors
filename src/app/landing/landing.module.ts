import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
'@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
// import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    // CarouselComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    // CarouselComponent
  
  ],
  exports:[
    
  ]
})
export class LandingModule { }
