import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BASE_URL } from '../app.routes';

export const authGuard: CanActivateFn = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  const router: Router = inject(Router);

  return isAuthenticated ? true : router.parseUrl(`${BASE_URL}/api/login`);
};
