import {Component, DoCheck, OnChanges, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements DoCheck {
  email!: string;
  // predefined for ngModel
  password = 'asd';

  // works with NgForm static allows to get in ngoninit otherwise we use in ngAfterViewInit
  @ViewChild('loginForm',{static:true}) loginForm!: NgForm;

  constructor() {
  }

  ngDoCheck() {
    console.log(this.email)
  }

  handleFormSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    form.reset()
    console.log(form.value)
  }

}
