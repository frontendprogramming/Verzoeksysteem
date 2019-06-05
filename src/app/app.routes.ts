import { Routes } from '@angular/router';
import { StartComponent } from './content/start/start.component';
import { NextComponent } from './content/next/next.component';
import { FirebaseLoggedInGuard } from './guards/firebase-logged-in.guard';
import { LoanedItemsListComponent } from './content/loaned-items-list/loaned-items-list.component';

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
    path: 'loaned',
    // TODO: only admin should have access.
    canActivate: [FirebaseLoggedInGuard],
    component: LoanedItemsListComponent
  },
  {
    path: '**',
    redirectTo: 'start'
  }
];
