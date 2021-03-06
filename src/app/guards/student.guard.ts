import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from '../service/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class IsStudentGuard implements CanActivate {

  constructor(
    private authService: AuthorizationService
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.currentUser &&
      (this.authService.currentUser.role === 'student' ||
        this.authService.currentUser.role === 'docent' ||
        this.authService.currentUser.role === 'beheerder')
    ) {
      return true;
    }
    return false;
  }

}
