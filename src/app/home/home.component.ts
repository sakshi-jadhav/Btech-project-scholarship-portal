import { Component, HostListener } from '@angular/core';
import { CaptchaComponent } from 'src/app/captcha/captcha.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Determine when to display the button based on scroll position
    this.showScrollButton = window.pageYOffset > 100;
  }

  scrollToTop() {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
