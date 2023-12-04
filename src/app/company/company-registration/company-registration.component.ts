import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatRadioModule } from '@angular/material/radio';
import { MatOptionModule } from '@angular/material/core';


import {FormBuilder} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css'],
  // providers: [
  //   {
  //     provide: STEPPER_GLOBAL_OPTIONS,
  //     useValue: {showError: true},
  //   },
  // ],
})
export class CompanyRegistrationComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  myForm: FormGroup;
  selectedValue: string='';
  date:string='';

  username: string = '';
  password: string = '';
  hide = true;
  hide2=true;
  password2: string = '';

  constructor(private _formBuilder: FormBuilder) {
    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      // Add more form controls as needed
    });
}

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
  // constructor(private _formBuilder: FormBuilder) {}
}
