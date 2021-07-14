import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './container/profile/profile.component';
import { NgModule } from '@angular/core';

const profileRoutes: Routes = [
  { path: '', component: ProfileComponent },
  { path: 'edit', component: ProfileComponent },
  { path: 'subscription', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(profileRoutes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
