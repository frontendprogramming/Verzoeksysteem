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
      name: 'Beschikbare items',
      routerLink: 'available',
      icon: 'local_offer',
      role: 'student'
    },
    {
      name: 'Verzoeken',
      routerLink: 'requests',
      icon: 'ballot',
      role: 'student'
    },
    {
      name: 'uitgeleende items',
      routerLink: 'loaned',
      icon: 'calendar_today',
      role: 'beheerder'
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
