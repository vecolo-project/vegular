import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './containers/users/users.component';
import { UsersFormComponent } from './components/users-form/users-form.component';

const usersRoutes: Routes = [
  { path: '', component: UsersComponent },
  { path: '/user/edit/:id', component: UsersFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
