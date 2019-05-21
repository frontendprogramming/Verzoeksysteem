import { Routes } from '@angular/router';
import { StartComponent } from './content/start/start.component';

export const routes: Routes = [
    {
        path: 'start',
        component: StartComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'start'
    }
];
