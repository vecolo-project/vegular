import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {LoginComponent} from './components/login/login.component';
import {AuthRoutingModule} from './auth-routing-module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    AuthRoutingModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthModule {
}
