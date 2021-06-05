import {RouterModule, Routes} from '@angular/router';
import {ProfileDashboardComponent} from '../profile/components/profile-dashboard/profile-dashboard.component';
import {NgModule} from '@angular/core';
import {HomeComponent} from './containers/home/home.component';

const homeRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
