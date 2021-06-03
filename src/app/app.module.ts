import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FormBuilder } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { ProfileModule } from './features/profile/profile.module';
import { UserModule } from './features/user/user.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './core/components/menu/menu.component';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CoreModule,
    ProfileModule,
    UserModule,
    AkitaNgDevtools.forRoot(),
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
