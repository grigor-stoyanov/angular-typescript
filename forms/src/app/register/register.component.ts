import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, ValidatorFn, Validators} from "@angular/forms";

// We can create our own directive or function for validators
function createMyValidator(config: number) {
  return (control: AbstractControl) => {
    return control.value > config ? {myValidator: true} : null;
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(8), createMyValidator(4)]]
    }
  )

  handleFormSubmit() {

  }

  constructor(private fb: FormBuilder) {

  }
}
