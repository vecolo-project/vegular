import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../guards/auth-guard.service';
import {routesPath} from './router.navigation';

const routes: Routes = [
  {
    path: '',
    redirectTo: routesPath.home,
    pathMatch: 'full'
  },
  {
    path: routesPath.home,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.dashboard,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.map,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.subscription,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.ride,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.issue,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.users,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.stations,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.bikes,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.subscriptions,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.finances,
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
