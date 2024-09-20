import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-age-groups',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './age-groups.component.html',
  styleUrl: './age-groups.component.css'
})
export class AgeGroupsComponent {

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
  
}
