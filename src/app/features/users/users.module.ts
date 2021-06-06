import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './containers/users/users.component';
import {UsersRoutingModule} from './user-routing.module';
import {UserListComponent} from './components/user-list/user-list.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [UsersComponent, UserListComponent],
  imports: [UsersRoutingModule, CommonModule, SharedModule ],
})
export class UsersModule {
}
