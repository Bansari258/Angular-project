import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  public showPassword: boolean = false;

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  })

  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  getpasswordMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('password') ? 'Not a valid password' :
        '';
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      return;
    }
  }

  constructor(private formbuilder: FormBuilder) { }
  profileform = new FormControl('', [Validators.required, Validators.email]);
  loginform = new FormControl('', [Validators.required, Validators.minLength(6)]);

  ngOnInit() {


  }
  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


}
