import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorage } from '@/app/core/local-storage/local-storage';

export function authGuard(): boolean {
  const router = inject(Router);
  const storage = inject(LocalStorage);

  if (storage.getItem('auth_token')) {
    router.navigateByUrl('/admin/modules');
    return false;
  }

  return true;
}
