import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthorizationService } from './service/authorization.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public isLoggedIn: boolean;

  routes = [
    {
      name: 'Start',
      routerLink: 'start',
      icon: 'home'
    },
    {
      name: 'next',
      routerLink: 'next',
      icon: 'android'
    }
  ];
  public constructor(
    private authService: AuthorizationService
  ) {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.authService.loginChange.subscribe(data => {
      this.isLoggedIn = data;
    });
  }

  ngOnInit() {
  }

  logOff() {
    this.authService.logOut();
  }

}
