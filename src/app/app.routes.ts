import { Routes } from '@angular/router';
import { Entreprises } from './entreprises/entreprises';
import { UserProfile } from './user-profile/user-profile';
import { canActivateAuthRole } from './guards/auth-role.guard';
import { Forbidden } from './forbidden/forbidden';

export const routes: Routes = [
  {
    path: 'entreprises',
    component: Entreprises,
    canActivate: [canActivateAuthRole],
    data: { role: 'ADMIN' },
  },
  { path: 'profile', component: UserProfile },
  { path: 'forbidden', component: Forbidden },
  { path: '', redirectTo: 'entreprises', pathMatch: 'full' },
];
