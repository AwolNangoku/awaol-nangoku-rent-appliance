import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { CreateAccountFormComponent } from './forms/create-account/create-account-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CreateAccountComponent } from './create-account/create-account.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    CreateAccountComponent,
    CreateAccountFormComponent,
    PageNotFoundComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
