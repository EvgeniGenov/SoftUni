import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';

import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MatExpansionModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
