import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './containers/users/users.component';
import { UsersRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../../shared/shared.module';
import { UsersFormComponent } from './components/users-form/users-form.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UsersFormComponent],
  imports: [UsersRoutingModule, CommonModule, SharedModule],
})
export class UsersModule {}
