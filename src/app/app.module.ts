import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { StartComponent } from './content/start/start.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { NextComponent } from './content/next/next.component';
import { LoginComponent } from './content/login/login.component';
import { AuthorizationService } from './service/authorization.service';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NextComponent,
    LoginComponent
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
    ToastrModule.forRoot()
  ],
  providers: [
    RouterModule,
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
