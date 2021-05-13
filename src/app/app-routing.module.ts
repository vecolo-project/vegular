import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './session/login/login.component';
import {ProfileComponent} from './session/profile/profile.component';
import {AuthGuardService} from './auth-guard/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService]},
  {path: '', redirectTo: '/profile', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
