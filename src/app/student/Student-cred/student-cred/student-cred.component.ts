import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-cred',
  templateUrl: './student-cred.component.html',
  styleUrls: ['./student-cred.component.css']
})
export class StudentCredComponent implements OnInit {
  username: string = '';
  password: string = '';
  hide = true;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    if (this.username === 'your_username' && this.password === 'your_password') {
      // Successful login logic (e.g., navigate to another page)
      console.log('Login successful');
    } else {
      // Failed login logic (e.g., display an error message)
      console.log('Login failed');
    }
  }

  onBtnClick(){

    // Navigate to /products page
    this.router.navigate(['/student-register']);

  }
}