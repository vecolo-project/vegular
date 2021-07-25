import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material-modules/material.module';
import {LottieModule} from 'ngx-lottie';
import player, {LottiePlayer} from 'lottie-web';
import {ChartsModule} from 'ng2-charts';
import {AddressSearchComponent} from './address-search/address-search.component';
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import {UserSearchComponent} from './user-search/user-search.component';
import {StationSearchComponent} from './station-search/station-search.component';
import {BikeSearchComponent} from './bike-search/bike-search.component';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import {BikeStatusPipe} from './pipes/BikeStatusPipe';
import {UserRolePipe} from './pipes/UserRolePipe';
import {StationStatusPipe} from './pipes/StationStatusPipe';

export function playerFactory(): LottiePlayer {
  return player;
}

@NgModule({
  declarations: [
    AddressSearchComponent,
    ConfirmDialogComponent,
    UserSearchComponent,
    StationSearchComponent,
    BikeSearchComponent,
    BikeStatusPipe,
    UserRolePipe,
    StationStatusPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    LottieModule.forRoot({player: playerFactory}),
    ChartsModule,
    RecaptchaModule,
    RecaptchaFormsModule

  ],
  exports: [
    CommonModule,
    MaterialModule,
    LottieModule,
    ChartsModule,
    AddressSearchComponent,
    ConfirmDialogComponent,
    UserSearchComponent,
    StationSearchComponent,
    BikeSearchComponent,
    RecaptchaModule,
    RecaptchaFormsModule,
    BikeStatusPipe,
    UserRolePipe,
    StationStatusPipe
  ]
})
export class SharedModule {
}
