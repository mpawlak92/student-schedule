import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage  {
emailValue = '';
  passwordValue = '';
  emailValidationResult = '';
  passwordValidationResult = '';

  loginBtn = true;
  constructor(public router: Router) {}

  validateEmail(email: string): string | null {
    // You can use a regular expression to validate the email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
      return 'Invalid email format';
    }

    return null; // Email is valid
  }

  validatePassword(password: string): string | null {
    // Password must be at least 6 characters long
    if (password.length < 6) {
      return 'Password must be at least 6 characters long';
    }

    // Password must contain at least one special character
    const specialCharacterPattern = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/;
    if (!specialCharacterPattern.test(password)) {
      return 'Password must contain at least one special character';
    }

    // Password must contain at least one capital letter
    const capitalLetterPattern = /[A-Z]/;
    if (!capitalLetterPattern.test(password)) {
      return 'Password must contain at least one capital letter';
    }

    return null; // Password is valid
  }
  login() {
    this.emailValidationResult = '';
    this.passwordValidationResult = '';
    const emailValidationResult = this.validateEmail(this.emailValue);
    const passwordValidationResult = this.validatePassword(this.passwordValue);

    if (emailValidationResult) {
      this.emailValidationResult = emailValidationResult;
      this.passwordValue = '';
    } else if (passwordValidationResult) {
      this.passwordValidationResult = passwordValidationResult;
      this.passwordValue = '';
    } else {
      this.emailValidationResult = '';
      this.passwordValidationResult = '';
      this.inputsClear();
      this.router.navigateByUrl('home');
    }
    this.router.navigateByUrl('home'); //for development
  }
  inputsClear() {
    this.emailValue = '';
    this.passwordValue = '';
  }
}
