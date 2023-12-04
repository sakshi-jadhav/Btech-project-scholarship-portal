import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.css']
})

export class PasswordValidatorComponent {
  firstFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.firstFormGroup = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(12)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
      confirm: ['', Validators.required],
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;

    return password === confirm ? null : { passwordMismatch: true };
  }

  isInvalid(controlName: string) {
    const control = this.firstFormGroup.get(controlName);
    return control?.invalid && control?.touched;
  }

  hasPasswordMismatchError() {
    return this.firstFormGroup.hasError('passwordMismatch') && this.isInvalid('confirm');
  }

  onSubmit() {
    if (this.firstFormGroup.valid) {
      // Handle form submission
      console.log('Form submitted!');
    } else {
      // Mark all fields as touched to display errors
      this.firstFormGroup.markAllAsTouched();
    }
  }
}
