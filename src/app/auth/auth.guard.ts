import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const router: Router = inject(Router);

  return isAuthenticated ? true : router.parseUrl('/api/login');
};
