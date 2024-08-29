import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BackgroundComponent } from '../background/background.component';
import { CarouselComponent } from './carousel/carousel.component';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone:true,
  imports:[
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    SocialMediaComponent,
    BackgroundComponent,
    CarouselComponent
  ]
})
export class LandingComponent implements OnInit {

  demo: any;
  public screenWidth: any;

  public screenHeight: any;
  screenBreak: any = false;
  currentRoute: any;
  showToolBar: boolean = true;
  isMobile: boolean = false;

  constructor() {



  }

  ngOnInit() {

    this.screenWidth = window.innerWidth;

    this.screenHeight = window.innerHeight;
    console.log(this.screenWidth);
    if (this.screenWidth < 500) {
      this.screenBreak = true;
    }



  }

}
