import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OtpService {
  private apiUrl = 'http://localhost:3000'; // Replace with your server's URL

  constructor(private http: HttpClient) { }

  sendOTP(email: string) {
    return this.http.post(`${this.apiUrl}/send-otp`, { email });
  }
}