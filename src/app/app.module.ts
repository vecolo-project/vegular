import {NgModule, OnInit} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {SessionModule} from './features/session/session.module';
import {MaterialModule} from './material-modules/material.module';
import {SessionQuery} from './features/session/state/session.query';
import {AuthGuardService} from './auth-guard/auth-guard.service';
import {FormBuilder} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SessionModule,
    MatButtonModule,
    MaterialModule,
    AkitaNgDevtools.forRoot()
  ],
  providers: [AuthGuardService, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule {
}
