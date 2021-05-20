import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuardService } from './guards/auth-guard.service';
import { AppRoutingModule } from './router/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RouterNavigation } from './router/router.navigation';
import { SharedModule } from '../shared/shared.module';
import { MobileMenuComponent } from './components/menu/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [LoginComponent, MobileMenuComponent],
  imports: [CommonModule, SharedModule, AppRoutingModule],
  exports: [LoginComponent, MobileMenuComponent, AppRoutingModule],
  providers: [AuthGuardService, RouterNavigation],
})
export class CoreModule {}
