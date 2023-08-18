import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { DirectivesModule } from 'src/app/directives/directives.module';

import { RegisterComponent } from './register.component';

@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    DirectivesModule
  ],
  exports: [RegisterComponent]
})
export class RegisterModule { }
