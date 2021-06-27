import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material-modules/material.module';
import {LottieModule} from "ngx-lottie";
import player from 'lottie-web';
import {ChartsModule} from "ng2-charts";

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [],
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
    ChartsModule
  ]
})
export class SharedModule {
}
