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

@Component({
  selector: "carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
  // animations: [
  //   trigger("slideAnimation", [
  //     /* scale */
  //     transition("void => scale", [
  //       useAnimation(scaleIn, { params: { time: "1500ms" } })
  //     ]),
  //     transition("scale => void", [
  //       useAnimation(scaleOut, { params: { time: "1500ms" } })
  //     ]),

  //     /* fade */
  //     transition("void => fade", [
  //       useAnimation(fadeIn, { params: { time: "1500ms" } })
  //     ]),
  //     transition("fade => void", [
  //       useAnimation(fadeOut, { params: { time: "1500ms" } })
  //     ]),

  //     /* flip */
  //     transition("void => flip", [
  //       useAnimation(flipIn, { params: { time: "500ms" } })
  //     ]),
  //     transition("flip => void", [
  //       useAnimation(flipOut, { params: { time: "500ms" } })
  //     ]),

  //     /* JackInTheBox */
  //     transition("void => jackInTheBox", [
  //       useAnimation(jackIn, { params: { time: "700ms" } })
  //     ]),
  //     transition("jackInTheBox => void", [
  //       useAnimation(jackOut, { params: { time: "700ms" } })
  //     ])
  //   ])
  // ],

  animations: [
    trigger("slideAnimation", [
      /* Scale */
      transition("void => scale", [
        style({ opacity: 0 }), // Start from opacity 0
        animate("1500ms", style({ opacity: 1 })), // Gradually become visible
        useAnimation(scaleIn, { params: { time: "1500ms" } })
      ]),
      transition("scale => void", [
        useAnimation(scaleOut, { params: { time: "1500ms" } }),
        animate("500ms", style({ opacity: 0 })) // Gradually fade out
      ]),
  
      /* Fade */
      transition("void => fade", [
        style({ opacity: 0 }),
        animate("1500ms", style({ opacity: 1 })),
        useAnimation(fadeIn, { params: { time: "1500ms" } })
      ]),
      transition("fade => void", [
        useAnimation(fadeOut, { params: { time: "1500ms" } }),
        animate("500ms", style({ opacity: 0 }))
      ]),
  
      /* Flip */
      transition("void => flip", [
        style({ opacity: 0, transform: "rotateY(-90deg)" }), // Set initial state for flip
        animate("500ms", style({ opacity: 1, transform: "rotateY(0deg)" })), // Animate to final state
        useAnimation(flipIn, { params: { time: "500ms" } })
      ]),
      transition("flip => void", [
        useAnimation(flipOut, { params: { time: "500ms" } }),
        animate("300ms", style({ opacity: 0 }))
      ]),
  
      /* JackInTheBox */
      transition("void => jackInTheBox", [
        style({ opacity: 0, transform: "scale(0.5) rotate(30deg)" }), // Start with scaled down and rotated
        animate("700ms", style({ opacity: 1, transform: "scale(1) rotate(0)" })), // Animate to normal size and rotation
        useAnimation(jackIn, { params: { time: "700ms" } })
      ]),
      transition("jackInTheBox => void", [
        useAnimation(jackOut, { params: { time: "700ms" } }),
        animate("300ms", style({ opacity: 0 }))
      ])
    ])
  ],
  
  standalone:true,
  imports:[CommonModule]
})
export class CarouselComponent implements OnInit {
  @Input() slideList:any;
  slides: Slide[] = [];
  @Input() animationType = AnimationType.Scale;

  currentSlide = 0;

  constructor() {}

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
    this.slides = this.slideList;
    this.startAutoSlide();
  }
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  intervalId: any; // Store interval ID to clear it later
  startAutoSlide(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 6000); // Change slide every x seconds
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
