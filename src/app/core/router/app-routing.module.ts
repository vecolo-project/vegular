import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { AuthGuardService } from '../guards/auth-guard.service';
import { ProfileDashboardComponent } from '../../features/profile/components/profile-dashboard/profile-dashboard.component';
import { routesPath } from './router.navigation';
import { UserFormComponent } from 'src/app/features/user/components/user-form/user-form.component';

const routes: Routes = [
  { path: routesPath.login, component: LoginComponent },
  {
    path: routesPath.profile,
    component: ProfileDashboardComponent,
    canActivate: [AuthGuardService],
  },
  { path: '', redirectTo: `/${routesPath.profile}`, pathMatch: 'full' },
  {
    path: routesPath.addUser,
    component: UserFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
