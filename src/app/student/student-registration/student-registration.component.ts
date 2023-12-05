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

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css'],
  
})
export class StudentRegistrationComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  myForm: FormGroup;
  selectedValue: string='';
  date:string='';
  constructor() {
    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      // Add more form controls as needed
    });
}
}
