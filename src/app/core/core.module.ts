import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGuardService} from './guards/auth-guard.service';
import {AppRoutingModule} from './router/app-routing.module';
import {LoginComponent} from './component/login/login.component';
import {RouterNavigation} from './router/router.navigation';
import {SharedModule} from '../shared/shared.module';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [LoginComponent, AppRoutingModule],
  providers: [AuthGuardService, RouterNavigation]
})
export class CoreModule {
}
