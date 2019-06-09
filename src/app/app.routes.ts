import { Routes } from '@angular/router';
import { StartComponent } from './content/start/start.component';
import { NextComponent } from './content/next/next.component';
import { LoanedItemsListComponent } from './content/loaned-items-list/loaned-items-list.component';
import { IsStudentGuard } from './guards/student.guard';
import { IsTeacherGuard } from './guards/teacher.guard';
import { IsAdminGuard } from './guards/admin-guard';
import { RequestComponent } from './content/request/request.component';
import { RequestListComponent } from './content/request-list/request-list.component';

export const routes: Routes = [
  {
    path: 'start',
    canActivate: [IsStudentGuard],
    component: StartComponent
  },
  {
    path: 'next',
    canActivate: [IsTeacherGuard],
    component: NextComponent
  },
  {
    path: 'loaned',
    // TODO: only admin should have access.
    canActivate: [IsAdminGuard],
    component: LoanedItemsListComponent
  },
  {
  path: 'requests',
  canActivate: [IsAdminGuard],
  component: RequestComponent
  },
  {
    path: 'adminrequest',
    canActivate: [IsAdminGuard],
    component: RequestListComponent
  },
  
  {
    path: '**',
    redirectTo: 'start'
  }
];
