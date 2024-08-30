import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BackgroundComponent } from '../background/background.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Slide } from "./carousel/carousel.interface";
import { AnimationType } from "./carousel/carousel.animations";



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
  animationType = AnimationType.Scale;
  @ViewChild(CarouselComponent, { static: true })
  carousel!: CarouselComponent;

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

  animationTypes = [
    {
      name: "Scale",
      value: AnimationType.Scale
    },
    {
      name: "Fade",
      value: AnimationType.Fade
    },
    {
      name: "Flip",
      value: AnimationType.Flip
    },
    {
      name: "Jack In The Box",
      value: AnimationType.JackInTheBox
    }
  ];
  slides: Slide[] = [
    {
      headline: "For Your Current Mood",
      src:
        "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
    },
    {
      headline: "Miouw",
      src:
        "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    },
    {
      headline: "In The Wilderness",
      src:
        "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80"
    },
    {
      headline: "Focus On The Writing",
      src:
        "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80"
    }
  ];


  setAnimationType(type: any) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
}
