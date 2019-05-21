import { Routes } from '@angular/router';
import { StartComponent } from './content/start/start.component';
import { NextComponent } from './content/next/next.component';

export const routes: Routes = [
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'next',
    component: NextComponent
  },
  {
    path: '**',
    redirectTo: 'start'
  }
];
