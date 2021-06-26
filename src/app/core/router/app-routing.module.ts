import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuardService} from '../guards/auth-guard.service';
import {routesPath} from './router.navigation';
import {StaffGuardService} from '../guards/staff-guard.service';

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
  {
    path: routesPath.map,
    loadChildren: () => import('../../features/map/map.module').then(m => m.MapModule)
  },
  // Auth
  {
    path: routesPath.subscription,
    loadChildren: () => import('../../features/user-subscription/user-subscription.module').then(m => m.UserSubscriptionModule),
    canActivate: [AuthGuardService]
  },
  {
    path: routesPath.rides,
    loadChildren: () => import('../../features/user-rides/user-rides.module').then(m => m.UserRidesModule),
    canActivate: [AuthGuardService]
  },
  {
    path: routesPath.issue,
    loadChildren: () => import('../../features/user-issues/user-issues.module').then(m => m.UserIssuesModule),
    canActivate: [AuthGuardService]
  },
  {
    path: routesPath.profile,
    loadChildren: () => import('../../features/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuardService],
  },
  // Staff
  {
    path: routesPath.users,
    loadChildren: () => import('../../features/users/users.module').then(m => m.UsersModule),
    canActivate: [StaffGuardService]
  },
  {
    path: routesPath.stations,
    loadChildren: () => import('../../features/stations/stations.module').then(m => m.StationsModule),
    // canActivate: [StaffGuardService]
  },
  {
    path: routesPath.bikes,
    loadChildren: () => import('../../features/bikes/bikes.module').then(m => m.BikesModule),
    canActivate: [StaffGuardService]
  },
  {
    path: routesPath.subscriptions,
    loadChildren: () => import('../../features/subscriptions/subscriptions.module').then(m => m.SubscriptionsModule),
    canActivate: [StaffGuardService]
  },
  {
    path: routesPath.finances,
    loadChildren: () => import('../../features/finances/finances.module').then(m => m.FinancesModule),
    canActivate: [StaffGuardService]
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
