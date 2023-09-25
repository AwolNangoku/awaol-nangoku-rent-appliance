import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html'
})

export class CreateAccountFormComponent {
  constructor(private router: Router) {}
  
  onCancel () {
    this.router.navigate(['/login'])
  }

  onCreateAccount() {
    console.log('Creating user account...')
  }
}