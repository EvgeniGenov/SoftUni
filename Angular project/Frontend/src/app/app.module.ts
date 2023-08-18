import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { JwtModule } from '@auth0/angular-jwt';
import { HttpClientModule, HttpRequest } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DirectivesModule } from './directives/directives.module';
import { HomeModule } from './components/home/home.module';
import { LoginModule } from './components/login/login.module';
import { RegisterModule } from './components/register/register.module';
import { ForgotPasswordModule } from './components/forgot-password/forgot-password.module';
import { UserPageModule } from './components/user-page/user-page.module';
import { AdminPageModule } from './components/admin-page/admin-page.module';
import { ChangePasswordModule } from './components/change-password/change-password.module';


export function tokenGetter() {
  return localStorage.getItem("access_token");
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    DirectivesModule,
    RouterModule,
    MatToolbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    LoginModule,
    RegisterModule,
    ForgotPasswordModule,
    HttpClientModule,
    UserPageModule,
    AdminPageModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    ChangePasswordModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:3000"]
      },
    })
  ],
  providers: [JwtHelperService],
  bootstrap: [AppComponent]
})

export class AppModule {

}


