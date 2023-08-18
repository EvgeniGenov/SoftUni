import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HTTPService } from 'src/app/services/http.service';
import { response } from 'express';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private auth: AuthService) {
    this.loginForm();
  }

  public formGroup!: FormGroup;

  public loginForm(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_/.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/)]),
    });
  }

  public login() {
    const body = {
      password: this.formGroup.controls['password'].value,
      email: this.formGroup.controls['email'].value
    };

    this.auth.login(body);

    this.router.navigate(['/']);

  }
}

