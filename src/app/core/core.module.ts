import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthGuardService} from './guards/auth-guard.service';
import {AppRoutingModule} from './router/app-routing.module';
import {RouterNavigation} from './router/router.navigation';
import {SharedModule} from '../shared/shared.module';
import {MobileMenuComponent} from './components/menu/mobile-menu/mobile-menu.component';
import {HttpClientWrapper} from './utils/httpClientWrapper';
import {MenuComponent} from './components/menu/menu.component';

@NgModule({
  declarations: [MenuComponent, MobileMenuComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [MenuComponent, MobileMenuComponent, AppRoutingModule],
  providers: [AuthGuardService, RouterNavigation, HttpClientWrapper],
})
export class CoreModule {
}
