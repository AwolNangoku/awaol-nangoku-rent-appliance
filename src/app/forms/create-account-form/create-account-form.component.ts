import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html'
})

export class CreateAccountFormComponent {
  newAccountForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.email],
    password: ['', Validators.minLength(8)]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  get userEmail () {
    return this.newAccountForm.get('email')
  }

  get userPassword () {
    return this.newAccountForm.get('password')
  }
  
  onCancel () {
    this.router.navigate(['/login'])
  }

  onCreateAccount() {
    console.log('Creating user account...', this.newAccountForm)
  }
}