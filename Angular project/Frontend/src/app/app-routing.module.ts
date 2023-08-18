import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserGuard } from './guards/user.guard';
import { ChangePasswordComponent } from './components/change-password/change-password.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'user-page', component: UserPageComponent, canActivate: [UserGuard] },
    { path: 'user-page/changepass', component: ChangePasswordComponent, canActivate: [UserGuard] }

];

@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule],
    exports: [RouterModule]
})
export class AppRoutingModule { }

