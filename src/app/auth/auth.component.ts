import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  signinForm = {
    email: '',
    password: '',
    errors: {
      email: '',
      password: ''
    }
  };

  signupForm = {
    email: '',
    password: '',
    confirmPassword: '',
    errors: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  };

  activeTab = 'signin';

  constructor() {}

  ngOnInit(): void {}

  handleTabChange(event) {
    this.activeTab = event.target.value;
  }

  handleSignin(e) {
    e.preventDefault();

    // Validate email and password

    // Send off to server, if no errors
    console.log(this.signinForm.email, this.signinForm.password);
  }

  handleSignup(e) {
    e.preventDefault();

    console.log(this.signupForm);
  }
}
