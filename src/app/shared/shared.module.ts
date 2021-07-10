import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material-modules/material.module';
import {LottieModule} from "ngx-lottie";
import player from 'lottie-web';
import {ChartsModule} from "ng2-charts";
import {AddressSearchComponent} from "./address-search/address-search.component";
import {ConfirmDialogComponent} from './confirm-dialog/confirm-dialog.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { StationSearchComponent } from './station-search/station-search.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AddressSearchComponent, ConfirmDialogComponent, UserSearchComponent, StationSearchComponent],
  imports: [
    CommonModule,
    MaterialModule,
    LottieModule.forRoot({player: playerFactory}),
    ChartsModule
  ],
    exports: [
        CommonModule,
        MaterialModule,
        LottieModule,
        ChartsModule,
        AddressSearchComponent,
        ConfirmDialogComponent,
        UserSearchComponent,
        StationSearchComponent
    ]
})
export class SharedModule {
}
