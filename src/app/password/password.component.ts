import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
  
})
export class PasswordComponent implements OnInit{
  registrationForm!: FormGroup;

  // Declare passwordControl here
  passwordControl: any;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.passwordControl = this.registrationForm.get('password');
  }

  createForm() {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, this.passwordValidator]]
    });
  }

  passwordValidator(control: { value: any; }) {
    // Password constraints
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /\d/;

    const value = control.value;

    const hasUppercase = uppercaseRegex.test(value);
    const hasLowercase = lowercaseRegex.test(value);
    const hasNumber = numberRegex.test(value);
    const isLengthValid = value.length >= minLength;

    const isValid = hasUppercase && hasLowercase && hasNumber && isLengthValid;

    return isValid ? null : { passwordInvalid: true };
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted successfully!', this.registrationForm.value);
      // Add your form submission logic here
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}