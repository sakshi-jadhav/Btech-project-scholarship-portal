// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-captcha',
//   templateUrl: './captcha.component.html',
//   styleUrls: ['./captcha.component.css']
// })
// export class CaptchaComponent {

// }

import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements AfterViewInit {
  @ViewChild('captchaCanvas')
  captchaCanvas!: ElementRef;
  userInput: string='';
  generatedCaptcha: string='';

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Generate the CAPTCHA when the view has been initialized
    this.generateCaptcha();
  }

  generateCaptcha() {
    // Generate a random CAPTCHA string (you can make it more complex)
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6;
    this.generatedCaptcha = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      this.generatedCaptcha += characters[randomIndex];
    }

    // Draw the CAPTCHA on the canvas
    const canvas = this.captchaCanvas.nativeElement;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '30px Arial';
    context.fillText(this.generatedCaptcha, 20, 40);
  }

  checkCaptcha() {
    if (this.userInput === this.generatedCaptcha) {
      alert('CAPTCHA is correct!');
      this.userInput = '';
      this.generateCaptcha();
    } else {
      alert('CAPTCHA is incorrect. Please try again.');
      this.userInput = '';
    }
  }
}
