import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/service/authorization.service';

@Component({
  selector: 'app-user-profile-select-list',
  templateUrl: './user-profile-select-list.component.html',
  styleUrls: ['./user-profile-select-list.component.scss']
})
export class UserProfileSelectListComponent implements OnInit {

  constructor(
    private authService: AuthorizationService
  ) { }

  ngOnInit() {
  }

  logOff() {
    this.authService.logout();
  }

  getUserName() {
    if (this.authService.currentUser.name) {
      return this.authService.currentUser.name;
    } else {
      return this.authService.currentUser.firebaseUser.email;
    }
  }
}
