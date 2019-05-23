import { Component, OnInit, HostListener } from '@angular/core';
import { AuthorizationService } from 'src/app/service/authorization.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup } from '@angular/forms';
import { registerForm, loginForm } from '../register/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  tryingToRegister = false;
  registerForm: FormGroup = registerForm;
  loginForm: FormGroup = loginForm;

  constructor(
    private authService: AuthorizationService,
    private toastrService: ToastrService
  ) {
   }


  ngOnInit() {
  }
  login(loginFormValues) {
    this.authService.login(loginFormValues.email, loginFormValues.password);
  }

  toggleRegister() {
    this.tryingToRegister = !this.tryingToRegister;
  }
  tryRegister(registerationFormValues) {
    this.authService.doRegister(registerationFormValues)
    .then(res => {
      this.toastrService.success('Succes!');
      this.authService.login(registerationFormValues.email, registerationFormValues.password);
    }, err => {
      this.toastrService.error(err.message, 'Error');
    });
  }

}
