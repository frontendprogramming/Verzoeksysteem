import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthorizationService } from '../service/authorization.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoggedInGuard implements CanActivate {

  constructor(
    private authService: AuthorizationService
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (!this.authService.isLoggedIn) {
      return false;
    }
    return true;

  }

}
