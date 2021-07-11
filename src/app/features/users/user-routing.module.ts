import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './containers/users/users.component';

const usersRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'edit/:id', component: UsersComponent },
  { path: 'view/:id', component: UsersComponent },
  { path: 'add', component: UsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
