import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SocialMediaComponent } from './social-media/social-media.component';
import { BackgroundComponent } from '../background/background.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Slide } from "./carousel/carousel.interface";
import { AnimationType } from "./carousel/carousel.animations";
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints,  } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';


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
    CarouselComponent,
    CommonModule
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

  private breakpointSubscription: Subscription;
  showMobileMenu: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {

    this.breakpointSubscription = this.breakpointObserver
    .observe([Breakpoints.Small, Breakpoints.XSmall])
    .subscribe((state) => {
      console.log(state)
      this.isMobile = state.matches;
      if(this.isMobile){

      }
      console.log(this.isMobile)

    });


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
      headline: "Individual learning with materials",
      src:'../../assets/cards/joy1.jpg',
        // "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      // text:"lorem ipsum"
    },
    {
      headline: "Small group activities in art, language, and gross motor skills",
      src: '../../assets/cards/joy2.jpg',

        // "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        // text:"lorem ipsum"
    },
    {
      headline: "Learning through a thematic approach",
      src: '../../assets/cards/joy3.jpg',
        // "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80",
        // text:"lorem ipsum"
    },
    {
      headline: "Occasional support learning through role-plays, presentations, storytelling,",
      src: '../../assets/cards/joy4.jpg',
        // "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        // text:"lorem ipsum"
    }
  ];


  setAnimationType(type: any) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }

  toggleMenu(){
    this.showMobileMenu = !this.showMobileMenu
  }
}
