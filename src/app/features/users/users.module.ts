import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UsersComponent} from './containers/users/users.component';
import {UsersRoutingModule} from './user-routing.module';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    UsersRoutingModule,
    CommonModule
  ]
})
export class UsersModule {
}
