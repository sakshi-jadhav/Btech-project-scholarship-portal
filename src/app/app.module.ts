import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentRegistrationComponent } from './student/student-registration/student-registration.component';
import { HeaderComponent } from './header/header.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { HeadingComponent } from './heading/heading.component';
import { HomeComponent } from './home/home.component';
import { NgOptimizedImage } from '@angular/common';
import { CompanyLoginComponent } from './company/company-login/company-login.component';
import { CompanyRegistrationComponent } from './company/company-registration/company-registration.component';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Correct
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
// import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
// import { MAT_DATE_LOCALE } from '@angular/material/core';
// import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateModule } from '@angular/material-moment-adapter';
// import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { StudentCredComponent } from './student/Student-cred/student-cred/student-cred.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { StepperComponent } from 'src/app/stepper/stepper.component';
// import * as _moment from 'moment';
import {MatStepperModule} from '@angular/material/stepper';
import { PasswordComponent } from 'src/app/password/password.component';
import {MatGridListModule} from '@angular/material/grid-list';  
import { CdkStepperModule } from '@angular/cdk/stepper';
 import { PasswordValidatorComponent } from 'src/app/password-validator/password-validator.component';  
import { GridListComponent } from 'src/app/grid-list/grid-list.component';
import { WorkingComponent } from 'src/app/working/working.component'; 
import { AboutComponent } from 'src/app/about/about.component';
import { LoanComponent } from 'src/app/loan/loan.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EducationComponent } from 'src/app/education/education.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { TrialComponent } from 'src/app/trial/trial.component';
import { EduloanComponent } from 'src/app/eduloan/eduloan.component';
import { AddScholarshipsComponent } from './add-scholarships/add-scholarships.component';
import { MatChipsModule } from '@angular/material/chips';

import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    StudentRegistrationComponent,
    HeaderComponent,
    CaptchaComponent,
    HeadingComponent,
    HomeComponent,
    CompanyLoginComponent,
    CompanyRegistrationComponent,
    FooterComponent,
    StudentCredComponent,
    StepperComponent,
    PasswordComponent,
    PasswordValidatorComponent,
    GridListComponent,
    WorkingComponent,
    AboutComponent,
    LoanComponent,
    EducationComponent,
    TrialComponent,
    EduloanComponent,
    AddScholarshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgIf,
    NgOptimizedImage,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    FontAwesomeModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatStepperModule,
    CdkStepperModule,
    MatGridListModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
