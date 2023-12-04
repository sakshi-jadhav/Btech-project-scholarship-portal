import {Component, ViewChild} from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, FormGroup,AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * @title Stepper that displays errors in the steps
 */
@Component({
  selector: 'app-stepper',
  templateUrl: 'stepper.component.html',
  styleUrls: ['stepper.component.css'],
  // providers: [
  //   {
  //     // provide: STEPPER_GLOBAL_OPTIONS,
  //     // useValue: {showError: true},
  //   },
  // ],

 
})
export class StepperComponent {
  @ViewChild('stepper') stepper!: MatStepper;
  firstFormGroup:FormGroup;
  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  forthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  
  fifthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  // myForm: FormGroup;
  selectedValue: string='';
  date:string='';

  go:boolean=false;
  username: string = '';
  password: string = '';
  hide = true;
  hide2=true;
  confirm: string = '';

  constructor(private _formBuilder: FormBuilder,private router: Router) {
    // this.myForm = new FormGroup({
    //   username: new FormControl('', [Validators.required]),
      // Add more form controls as needed
      this.firstFormGroup = this._formBuilder.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(8), passwordValidator()]],
        confirm: ['', [Validators.required, this.passwordMatchValidator]]
      });
}

ngOnInit(): void { }

passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirm = control.get('confirm')?.value;

  if (password !== confirm) {
    return { passwordMismatch: true };
  }

  return null;
}

  onSubmit(username:any,password:any,confirm:any) {
    if (username.length != 12) {
      alert("Username should be 12 characters long");
    } else if (password == '') {
      alert("Please enter password");
    } else {
      const isValidPassword = passwordValidator()(this.firstFormGroup.get('password')!);
      if (isValidPassword !== null) {
        alert("Password should contain 1 uppercase letter, 1 lowercase letter, 1 special character, and 1 number");
      } else if (password !== confirm || confirm === '') {
        alert("Passwords don't match");
      } else {
        console.log('Login successful');
        console.log(password);
        console.log(confirm);
        this.stepper.next();
      }
    }
  
    // if(username.length!=12)
    // {
    //   alert("Username should be 12 characters long");
    // }
    // else{

    //   const isValidPassword = passwordValidator()(this.firstFormGroup.get('password')!);
    //   if(password=='')
    //   {
    //     alert("Please enter password");
    //   }
    //   else if(isValidPassword!==null)
    //   {
    //     alert("password should contain 1 upeercase letter, 1 lowercase letter, 1 special character and 1 number");
    //   }
    //   else if( password === confirm && confirm!='') {
    //     // Successful login logic (e.g., navigate to another page)
    //     console.log('Login successful');
    //     console.log(password);
    //     console.log(confirm);
    //     // this.go=true;
    //     // this.router.navigate(['/secondFormGroup']);
    //     this.stepper.next();
    //   } else {
    //     // Failed login logic (e.g., display an error message)
    //     console.log('Login failed');
    //     alert("Password doesn't match!");
    //   }
    }

    // if (this.firstFormGroup.valid) {
    //   // Proceed to the next step
    //   console.log('Login successful');

    //   this.stepper.next();
    // } else {
    //   // Handle validation errors, including password mismatch
    //   if (this.firstFormGroup.hasError('passwordMismatch')) {
    //     // Display an error message for password mismatch
    //     // You can set a flag or message to display in your template
    //   } else {
    //     // Handle other validation errors
    //   }
    // }

  // }
  // constructor(private _formBuilder: FormBuilder) {}
}
export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    if (!password) {
      return null; // If no value, return no error (required validator will catch this)
    }

    const hasNumber = /\d/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);

    const isValid = hasNumber && hasUppercase && hasLowercase && hasSpecial;

    return isValid ? null : { invalidPassword: true };
  };
}

