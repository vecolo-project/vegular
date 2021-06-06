import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './containers/users/users.component';
import { UsersRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [UsersRoutingModule, CommonModule],
})
export class UsersModule {}
