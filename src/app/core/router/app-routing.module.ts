import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../../features/auth/components/login/login.component';
import {AuthGuardService} from '../guards/auth-guard.service';
import {ProfileDashboardComponent} from '../../features/profile/components/profile-dashboard/profile-dashboard.component';
import {routesPath} from './router.navigation';

const routes: Routes = [
  {
    path: routesPath.home,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.auth,
    loadChildren: () => import('../../features/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: routesPath.profile,
    loadChildren: () => import('../../features/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuardService],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
