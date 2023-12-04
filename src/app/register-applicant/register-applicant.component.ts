import { Component } from '@angular/core';

@Component({
  selector: 'app-register-applicant',
  templateUrl: './register-applicant.component.html',
  styleUrls: ['./register-applicant.component.css']
})
export class RegisterApplicantComponent {

  formData = {
    firstName: '',
    lastName: '',
    email: '',
    university: '',
    gpa: null
  };

  register() {
    // Implement your registration logic here
    console.log(this.formData); // Display the collected data
  }
}