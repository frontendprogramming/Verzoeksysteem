import { Routes } from '@angular/router';
import { StartComponent } from './content/start/start.component';
import { NextComponent } from './content/next/next.component';
import { FirebaseLoggedInGuard } from './guards/firebase-logged-in.guard';

export const routes: Routes = [
  {
    path: 'start',
    canActivate: [FirebaseLoggedInGuard],
    component: StartComponent
  },
  {
    path: 'next',
    canActivate: [FirebaseLoggedInGuard],
    component: NextComponent
  },
  {
    path: '**',
    redirectTo: 'start'
  }
];
