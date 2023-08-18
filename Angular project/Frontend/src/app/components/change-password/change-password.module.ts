import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChangePasswordComponent } from './change-password.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ChangePasswordComponent
  ],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [ChangePasswordComponent]
})
export class ChangePasswordModule { }
