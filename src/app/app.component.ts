import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthorizationService } from './service/authorization.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


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
    },
    {
      name: 'uitgeleende items',
      routerLink: 'loaned',
      icon: 'calendar_today'
    }
  ];
  public constructor(
    private authService: AuthorizationService
  ) {
  }

  ngOnInit() {
  }

  logOff() {
    this.authService.logout();
  }

}
