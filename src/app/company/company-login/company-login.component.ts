import { Component } from '@angular/core';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.css']
})
export class CompanyLoginComponent {

  username: string = '';
  password: string = '';
  hide = true;
  onSubmit() {
    if (this.username === 'your_username' && this.password === 'your_password') {
      // Successful login logic (e.g., navigate to another page)
      console.log('Login successful');
    } else {
      // Failed login logic (e.g., display an error message)
      console.log('Login failed');
    }
  }

}
