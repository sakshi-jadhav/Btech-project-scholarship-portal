import { Component } from '@angular/core';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent {
  loginForm = {
    email: '',
    password: ''
  };

  login() {
    // You can implement user authentication logic here
    console.log('User logged in with email:', this.loginForm.email);
  }
}
