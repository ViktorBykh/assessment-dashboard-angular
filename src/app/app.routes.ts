import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { authGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AssessmentReportComponent } from './components/assessment-report/assessment-report.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

export const BASE_URL = 'assessment-dashboard-angular';

export const routes: Routes = [
  { path: `${BASE_URL}/api/login`, title: 'Login Form', component: LoginFormComponent },
  {
    path: `${BASE_URL}/api/userassessments`,
    title: 'Dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: `${BASE_URL}/api/userassessments/graph/:id`,
    title: 'Assessment Report',
    component: AssessmentReportComponent,
    canActivate: [authGuard],
  },
  {
    path: `${BASE_URL}/api/users`,
    title: 'Users',
    component: UsersTableComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: `${BASE_URL}/api/login`, pathMatch: 'full' },
];
