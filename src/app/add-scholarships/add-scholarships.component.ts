import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
@Component({
  selector: 'app-add-scholarships',
  templateUrl: './add-scholarships.component.html',
  styleUrls: ['./add-scholarships.component.css']
})
export class AddScholarshipsComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  myForm: FormGroup;
  constructor(private _formBuilder: FormBuilder) {
    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      // Add more form controls as needed
    });
}
}
