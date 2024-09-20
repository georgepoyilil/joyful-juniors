import { Component } from '@angular/core';
import { AgeGroupsComponent } from '../age-groups/age-groups.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AnimationType } from '../carousel/carousel.animations';
import { Slide } from '../carousel/carousel.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AgeGroupsComponent, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations:[
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      state('*', style({
        opacity: 1
      })),
      transition(':enter', [  // :enter is alias for void => *
        style({ opacity: 0 }),
        animate('500ms ease-in')
      ]),
      transition(':leave', [  // :leave is alias for * => void
        animate('500ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HomeComponent {
  animationType = AnimationType.Scale;
  
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
}
