import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { LoginComponent } from './content/login/login.component';
import { AuthorizationService } from './service/authorization.service';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { UserProfileSelectListComponent } from './content/user-profile-select-list/user-profile-select-list.component';
import { LoanedItemsListComponent } from './content/loaned-items-list/loaned-items-list.component';
import { LoanedItemComponent } from './content/loaned-item/loaned-item.component';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AvailableItemsComponent, DialogComponent } from './content/available-items/available-items.component';
import { AvailableItemsListComponent } from './content/available-items-list/available-items-list.component';
import { RequestListComponent } from './content/request-list/request-list.component';
import { RequestItemComponent } from './content/request-item/request-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserProfileSelectListComponent,
    LoanedItemsListComponent,
    LoanedItemComponent,
    AvailableItemsComponent,
    AvailableItemsListComponent,
    DialogComponent,
    RequestItemComponent,
    RequestListComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [
    RouterModule,
    AuthorizationService
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    DialogComponent
  ],
})
export class AppModule { }
