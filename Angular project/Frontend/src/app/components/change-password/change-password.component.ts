import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})

export class ChangePasswordComponent {
    passwordsMatching = false;
    isConfirmPasswordDirty = false;
    confirmPasswordClass = 'form-control';
    newPassword = new FormControl(null, [
      (c: AbstractControl) => Validators.required(c),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),
    ]);
    confirmPassword = new FormControl(null, [
      (c: AbstractControl) => Validators.required(c),
      Validators.pattern(
        /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
      ),
    ]);
  
    resetPasswordForm = this.formBuilder.group(
      {
        newPassword: this.newPassword,
        confirmPassword: this.confirmPassword,
      },
      {
        validator: this.ConfirmedValidator('newPassword', 'confirmPassword'),
      }
    );
  
    constructor(private formBuilder: FormBuilder) {}
  
    onSubmit(): void {
      console.log(this.resetPasswordForm);
      if (!this.resetPasswordForm?.valid) {
        return;
      }
    }
  
    ConfirmedValidator(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (
          matchingControl.errors &&
          !matchingControl.errors
        ) {
          return;
        }
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
        } else {
          matchingControl.setErrors(null);
        }
      };
    }
  }
