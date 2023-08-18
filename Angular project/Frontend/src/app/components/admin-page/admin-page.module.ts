import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    FormsModule,
    MatInputModule,
    MatExpansionModule,
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [AdminPageComponent]
})
export class AdminPageModule { }
