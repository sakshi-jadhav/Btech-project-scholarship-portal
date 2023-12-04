import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css'],
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
export class LoanComponent {
  isOpen = false;
  isBlurred=false;
  imagePath = 'assets/scolarship2.png';

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.isBlurred = this.isOpen;

  }
  toggleCurtainMenu() {
    // You can access the curtain menu component and trigger its toggleMenu() method here if needed
    this.isOpen=true;
    this.isBlurred = this.isOpen;
  }
  toggleBlur() {
    this.isBlurred = !this.isBlurred;
  }
}