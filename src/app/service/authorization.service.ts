import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase } from '@angular/fire/database';
import { AppUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private user: AppUser = new AppUser();

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private toastrService: ToastrService,
    private db: AngularFireDatabase
  ) {
    // listen to changes in 'authState', if change..
    this.afAuth.authState.subscribe(user => {
      // ..check if user is logged in, if so...
      if (user) {
        // get role for current user.
        this.user.firebaseUser = user;
        this.db.database.ref(`users/${this.user.firebaseUser.uid}`).once('value').then(data => {
          this.user.role =  data.val().role;
          this.user.name = data.val().name;
        });
      }
    });
  }

  get isLoggedIn(): boolean {
    // if we don't have a user..
    if (!this.user || !this.user.firebaseUser) {
      return false;
    }
    // if we do..
    return true;
  }

  get currentUser(): AppUser {
    return this.user;
  }

  async login(email: string, password: string) {
    try {
      // const authedUser = 
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      // this.user.firebaseUser = authedUser.user;
      this.router.navigate(['start']);
    } catch (e) {
      this.toastrService.error(e.message);
    }
  }
  async logout() {
    await this.afAuth.auth.signOut();
    // remove user from memory.
    this.user.firebaseUser = null;
    this.user.role = null;
    this.toastrService.info('logged off succesfully.');
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          // set creates a document at location 'users/:id' with the object specified below.
          this.db.database.ref(`users/${res.user.uid}`).set({
            role: 'student',
            name: value.name
          });
          resolve(res);
          this.toastrService.success('Succes!');
        }, err => {
          this.toastrService.error(err.message, 'Error');
          reject(err);
        });
    });
  }
  setRoleForCurrentUser(role: string) {
    if (this.user) {
      this.db.database.ref(`users/${this.user.firebaseUser.uid}`).update({
        // this means { role: role }
        role
      });
      console.log(`User with mail '${this.user.firebaseUser.email}' now has role: '${role}'`);
    } else {
      console.error('User not logged in.');
    }
  }
}
