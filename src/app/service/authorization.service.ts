import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public loginChange: Subject<boolean> = new Subject<boolean>();
  public isLoggedIn = true;

  constructor() {
   }
   public loginWithEmailAndPassword(email: string, password: string): boolean {
     // TODO login the user
     if (email === 'test' && password === 'test') {
      this.changeUserStatus(true);
      return true;
     } else {
       return false;
     }
   }
   public logOut() {
     this.changeUserStatus(false);
   }

   private changeUserStatus(userStatus: boolean) {
    this.isLoggedIn = userStatus;
    this.loginChange.next(this.isLoggedIn);
   }
}
