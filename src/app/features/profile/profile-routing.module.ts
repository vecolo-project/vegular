import {RouterModule, Routes} from '@angular/router';
import {ProfileDashboardComponent} from './components/profile-dashboard/profile-dashboard.component';
import {NgModule} from '@angular/core';

const profileRoutes: Routes = [
  {path: '', component: ProfileDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
