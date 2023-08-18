import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { ForgotPasswordComponent } from './forgot-password.component';

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    FormsModule,
    MatInputModule,
    BrowserModule,
    MatFormFieldModule,
    ReactiveFormsModule

  ],
  exports: [ForgotPasswordComponent]
})
export class ForgotPasswordModule { }
