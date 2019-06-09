import { Routes } from '@angular/router';
import { LoanedItemsListComponent } from './content/loaned-items-list/loaned-items-list.component';
import { AvailableItemsListComponent } from './content/available-items-list/available-items-list.component';
import { IsStudentGuard } from './guards/student.guard';
import { IsTeacherGuard } from './guards/teacher.guard';
import { IsAdminGuard } from './guards/admin-guard';
import { RequestListComponent } from './content/request-list/request-list.component';

export const routes: Routes = [
  {
    path: 'loaned',
    // canActivate: [IsAdminGuard],
    component: LoanedItemsListComponent
  },
  {
    path: 'available',
    component: AvailableItemsListComponent
  },
  {
    path: 'adminrequest',
    // canActivate: [IsAdminGuard],
    component: RequestListComponent
  },
  {
    path: '**',
    redirectTo: 'available'
  }
];
