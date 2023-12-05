
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  // checked = false;
  // indeterminate = false;
  filters = this._formBuilder.group({
    st: false,
    sc: false,
    obc: false,
    sbc: false,
    vjnt: false,
    ebc: false,
    // : false,

  });

  constructor(private _formBuilder: FormBuilder) {}
}
