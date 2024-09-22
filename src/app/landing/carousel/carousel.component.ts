import { Component, Input, OnInit } from "@angular/core";
import { Slide } from "./carousel.interface";
import { trigger, transition, useAnimation, style, animate } from "@angular/animations";

import {
  AnimationType,
  scaleIn,
  scaleOut,
  fadeIn,
  fadeOut,
  flipIn,
  flipOut,
  jackIn,
  jackOut
} from "./carousel.animations";
import { CommonModule } from "@angular/common";
import { Subscription } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  animations: [
    trigger("slideAnimation", [
      /* scale */
      transition("void => scale", [
        useAnimation(scaleIn, { params: { time: "1500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "1500ms" } })
      ]),

      /* fade */
      transition("void => fade", [
        useAnimation(fadeIn, { params: { time: "1500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "1500ms" } })
      ]),

      /* flip */
      transition("void => flip", [
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } })
      ]),

      /* JackInTheBox */
      transition("void => jackInTheBox", [
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } })
      ])
    ])
  ],
  
  standalone:true,
  imports:[CommonModule]
})
export class CarouselComponent implements OnInit {
  @Input() slideList:any;
  slides: Slide[] = [
    {
      headline: "Individual learning with materials",
      src:'assets/cards/joy1.jpg',
        // "https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
      // text:"lorem ipsum"
    },
    {
      headline: "Small group activities in art, language, and gross motor skills",
      src: 'assets/cards/joy2.jpg',

        // "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        // text:"lorem ipsum"
    },
    {
      headline: "Learning through a thematic approach",
      src: 'assets/cards/joy3.jpg',
        // "https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80",
        // text:"lorem ipsum"
    },
    {
      headline: "Occasional support learning through role-plays, presentations, storytelling,",
      src: 'assets/cards/joy4.jpg',
        // "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80",
        // text:"lorem ipsum"
    }
  ];
  getFullPath(relativePath: string): string {
    return `${window.location.origin}/joyful-juniors/${relativePath}`;
  }
  
  @Input() animationType = AnimationType.Scale;

  currentSlide = 0;


  public screenWidth: any;

  isMobile: boolean = false;

  private breakpointSubscription: Subscription;


  constructor(private breakpointObserver: BreakpointObserver) {

    this.breakpointSubscription = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .subscribe((state) => {
      console.log(state)
      this.isMobile = state.matches;
      if(this.isMobile){

      }
      console.log(this.isMobile)

    });

  }

  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

  ngOnInit() {
    this.preloadImages(); // for the demo
    console.log(this.slides);
    // this.slides = this.slideList;
    this.startAutoSlide();
  }
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  intervalId: any; // Store interval ID to clear it later
  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4500); // Change slide every x seconds
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length; // Loop back to the first slide after the last one
  }

  preloadImages() {
    for (const slide of this.slides) {
      new Image().src = slide.src;
    }
  }

  
  
}
