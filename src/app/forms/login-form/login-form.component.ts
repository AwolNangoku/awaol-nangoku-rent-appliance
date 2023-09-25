import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})

export class LoginFormComponent {
  loginForm = this.fb.group({
    email: ['', Validators.email],
    password: ['', Validators.minLength(8)]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  get userEmail () {
    return this.loginForm.get('email')
  }

  get userPassword () {
    return this.loginForm.get('password')
  }
  
  login() {
    if (this.loginForm.valid && this.loginForm.touched) {
      console.log('Signing user in with...', this.loginForm.value)
    }
  }

  signUp() {
    this.router.navigate(['/create-account'])
  }
}