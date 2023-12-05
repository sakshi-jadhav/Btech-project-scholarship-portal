import { Component } from '@angular/core';
import { OtpService } from '../otp.service';

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
})
export class OtpVerificationComponent {
  userOTP!: string;
  email!: string;
  validationMessage!: string;

  constructor(private otpService: OtpService) { }

  generateOTP() {
    this.otpService.sendOTP(this.email).subscribe(
      () => {
        this.validationMessage = 'OTP sent to your email. Please check your inbox.';
      },
      (error) => {
        this.validationMessage = 'Error sending OTP. Please try again later.';
        console.error(error);
      }
    );
  }

  verifyOTP()
  {
    
  }
}