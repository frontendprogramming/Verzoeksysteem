import { Routes } from '@angular/router';
import { StartComponent } from './content/start/start.component';
import { NextComponent } from './content/next/next.component';
import { IsStudentGuard } from './guards/student.guard';
import { IsTeacherGuard } from './guards/teacher.guard';

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
    path: '**',
    redirectTo: 'start'
  }
];
