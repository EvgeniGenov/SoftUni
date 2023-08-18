import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { HTTPService } from 'src/app/services/http.service';
import { PassValidator } from 'src/app/validators/pass-validator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  public errorMessage!: string;
  constructor(private router: Router, private auth: AuthService) {
    this.createForm();
  
  }
  public formGroup!: FormGroup;
  public passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  public createForm(): void {
    this.formGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/[A-Z]/)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/[A-Z]/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_/.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(this.passwordRegex)]),
      confirmPassword: new FormControl('', [ Validators.required, Validators.pattern(this.passwordRegex)]),
    }, {
      validators:PassValidator
    });

  }

  public submitUserData() {
    let errorMessage!: any;
    const body  =  {
      firstName: this.formGroup.controls['firstName'].value,
      lastName: this.formGroup.controls['lastName'].value,
      password: this.formGroup.controls['password'].value,
      email: this.formGroup.controls['email'].value
    };
      errorMessage = this.auth.createUser(body)
      console.log(errorMessage)
      
      this.router.navigate(['user-page']);
  }
}
