import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './user-page.component';

@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    FormsModule,
    MatInputModule,
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [UserPageComponent]
})
export class UserPageModule { }
