import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { authGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AssessmentReportComponent } from './components/assessment-report/assessment-report.component';
import { UsersTableComponent } from './components/users-table/users-table.component';

export const routes: Routes = [
  { path: 'api/login', title: 'Login Form', component: LoginFormComponent },
  {
    path: 'api/userassessments',
    title: 'Dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  {
    path: 'api/userassessments/graph/:id',
    title: 'Assessment Report',
    component: AssessmentReportComponent,
    canActivate: [authGuard],
  },
  {
    path: 'api/users',
    title: 'Users',
    component: UsersTableComponent,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '/api/login', pathMatch: 'full' },
];
