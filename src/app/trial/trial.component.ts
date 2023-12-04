import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateX(0)',
      })),
      state('closed', style({
        transform: 'translateX(-100%)',
      })),
      transition('open <=> closed', [
        animate('0.3s ease-in-out')
      ]),
    ]),
  ],
})
export class TrialComponent {
  isOpen = false;
  isBlurred=false;
  imagePath = 'assets/scolarship2.png';
  constructor(private router: Router) {}
 
  toggleMenu() {
    // this.isOpen = !this.isOpen;
    // this.isBlurred = this.isOpen;

    this.isOpen = true; // Set isOpen to false to close the menu
    this.isBlurred = true;

  }
  toggleCurtainMenu() {
    // You can access the curtain menu component and trigger its toggleMenu() method here if needed
    this.isOpen=true;
    this.isBlurred = this.isOpen;
  }
  toggleBlur() {
    this.isBlurred = !this.isBlurred;
  }

  goBack() {
    this.router.navigate(['/eduloan']); // Replace '/' with the path you want to navigate back to
  }
  
}
