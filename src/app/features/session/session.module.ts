import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AkitaNgDevtools} from '@datorama/akita-ngdevtools';
import {ProfileComponent} from './profile/profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AkitaNgEffectsModule} from '@datorama/akita-ng-effects';
import {SessionEffect} from './state/session.effect';


@NgModule({
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AkitaNgEffectsModule.forFeature([SessionEffect])
  ]
})
export class SessionModule {
}
