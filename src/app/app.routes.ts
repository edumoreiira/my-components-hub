import { Routes } from '@angular/router';
import { DefaultComponent } from './pages/default/default.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: DefaultComponent },
    { path: 'dashboard', component: DefaultComponent },
];
