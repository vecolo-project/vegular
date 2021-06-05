import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../guards/auth-guard.service';
import {routesPath} from './router.navigation';

const routes: Routes = [
  // No Auth
  {
    path: routesPath.home,
    loadChildren: () => import('../../features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: routesPath.auth,
    loadChildren: () => import('../../features/auth/auth.module').then(m => m.AuthModule)
  },
  // Auth
  {
    path: routesPath.dashboard,
    loadChildren: () => import('../../features/user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule)
  },
  {
    path: routesPath.map,
    loadChildren: () => import('../../features/map/map.module').then(m => m.MapModule)
  },
  {
    path: routesPath.subscription,
    loadChildren: () => import('../../features/user-subscription/user-subscription.module').then(m => m.UserSubscriptionModule)
  },
  {
    path: routesPath.rides,
    loadChildren: () => import('../../features/user-rides/user-rides.module').then(m => m.UserRidesModule)
  },
  {
    path: routesPath.issue,
    loadChildren: () => import('../../features/user-issues/user-issues.module').then(m => m.UserIssuesModule)
  },
  {
    path: routesPath.profile,
    loadChildren: () => import('../../features/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuardService],
  },
  // Staff
  {
    path: routesPath.users,
    loadChildren: () => import('../../features/users/users.module').then(m => m.UsersModule)
  },
  {
    path: routesPath.stations,
    loadChildren: () => import('../../features/stations/stations.module').then(m => m.StationsModule)
  },
  {
    path: routesPath.bikes,
    loadChildren: () => import('../../features/bikes/bikes.module').then(m => m.BikesModule)
  },
  {
    path: routesPath.subscriptions,
    loadChildren: () => import('../../features/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule)
  },
  {
    path: routesPath.finances,
    loadChildren: () => import('../../features/finances/finances.module').then(m => m.FinancesModule)
  },
  {
    path: '**',
    redirectTo: routesPath.home,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
