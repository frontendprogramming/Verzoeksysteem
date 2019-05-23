import { Component, OnInit, HostListener } from '@angular/core';
import { AuthorizationService } from 'src/app/service/authorization.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private authService: AuthorizationService,
    private toastrService: ToastrService
  ) { }


  ngOnInit() {
  }
  login() {
    if (!this.authService.loginWithEmailAndPassword(this.email, this.password)) {
      this.toastrService.error('try logging in with "test" and "test"', 'Login Failed.');
    }
  }
  @HostListener('document:keyup.Enter')
  onKeyUp() {
    this.login();
  }

}
