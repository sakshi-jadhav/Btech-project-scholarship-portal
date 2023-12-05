import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentRegistrationComponent } from './student/student-registration/student-registration.component';
import { HomeComponent } from './home/home.component';
import { CompanyLoginComponent } from './company/company-login/company-login.component';
import { CompanyRegistrationComponent } from './company/company-registration/company-registration.component';
import { StudentCredComponent } from './student/Student-cred/student-cred/student-cred.component';
import { StepperComponent, passwordValidator } from 'src/app/stepper/stepper.component';
import { PasswordComponent } from 'src/app/password/password.component';
import { PasswordValidatorComponent } from 'src/app/password-validator/password-validator.component';
import { GridListComponent } from 'src/app/grid-list/grid-list.component';
import { WorkingComponent } from 'src/app/working/working.component';
import { AboutComponent } from 'src/app/about/about.component';
import { LoanComponent } from 'src/app/loan/loan.component';
import { EducationComponent } from 'src/app/education/education.component';
import { TrialComponent } from 'src/app/trial/trial.component';
import { EduloanComponent } from 'src/app/eduloan/eduloan.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { AddScholarshipsComponent } from './add-scholarships/add-scholarships.component';

const routes: Routes = [
  { path: '', component: GridListComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'student-register', component: StudentRegistrationComponent },
  { path: 'company-login', component: CompanyLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'student-cred', component: StudentCredComponent },
  { path: 'student-cred2', component: StudentCredComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'password', component: PasswordComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'grid', component: GridListComponent },
  { path: 'working', component: WorkingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'loan', component: LoanComponent },
  { path: 'education', component: EducationComponent },
  { path: 'trial', component: TrialComponent },
  { path: 'eduloan', component: EduloanComponent },
  { path: 'addscholarships', component: AddScholarshipsComponent },
  { path: 'footer', component: FooterComponent },

  
  { path: 'company-registration', component: CompanyRegistrationComponent },
  { path: 'passwordvalidator', component: PasswordValidatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
