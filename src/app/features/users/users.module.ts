import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './containers/users/users.component';
import {UsersRoutingModule} from './user-routing.module';
import {UserListComponent} from './components/user-list/user-list.component';
import {SharedModule} from '../../shared/shared.module';
import {UsersFormComponent} from './components/users-form/users-form.component';
import {UserViewComponent} from './components/user-view/user-view.component';
import {UserNewsletterComponent} from './components/user-newsletter/user-newsletter.component';

@NgModule({
  declarations: [UsersComponent, UserListComponent, UsersFormComponent, UserViewComponent, UserNewsletterComponent],
  imports: [UsersRoutingModule, CommonModule, SharedModule],
})
export class UsersModule {
}
