import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html'
})

export class CreateAccountComponent {
  constructor(private router: Router) {}
  
  onCancel () {
    this.router.navigate(['/login'])
  }

  onCreateAccount() {
    console.log('Creating user account...')
  }
}