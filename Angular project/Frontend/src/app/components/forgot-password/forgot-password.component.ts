import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HTTPService } from 'src/app/services/http.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  public emailGroup!: FormGroup;
  constructor(private httpservice: HTTPService) { 
    this.resetPassForm();
  }

  public resetPassForm(): void {
    this.emailGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_/.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-\.]+$/)])
    });
  }

  public sendResetToken()  {
    const body  =  {
      email: this.emailGroup.controls['email'].value
    };
    console.log(body);   
    this.httpservice.createResetPasswordToken(body)
      .subscribe({
        next(data) {
          console.log(data)
        },
        error(err) {
          console.log(err)
        },
        complete() {
          console.log('done');
        }
      });
  }
}
