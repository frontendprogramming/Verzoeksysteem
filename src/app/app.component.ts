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
      icon: 'home',
      role: 'student'
    },
    {
      name: 'next',
      routerLink: 'next',
      icon: 'android',
      role: 'docent'
    },
    {
      name: 'uitgeleende items',
      routerLink: 'loaned',
      icon: 'calendar_today',
      role: 'student'
    },
    {
      name: 'aanvragen',
      routerLink: 'adminrequest',
      icon: 'record_voice_over',
      role: 'beheerder'
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
  isVisible(role: string) {
    if (this.authService.currentUser.role === 'beheerder') {
      return true;
    }
    if (this.authService.currentUser.role === 'docent') {
      if (role === 'docent' || role === 'student') {
        return true;
      } else {
        return false;
      }
    }
    if (this.authService.currentUser.role === 'student') {
      if (role === 'student') {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

}
