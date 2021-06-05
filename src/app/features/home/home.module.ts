import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './containers/home/home.component';
import {HomeRoutingModule} from './home-routing-module';
import {SharedModule} from '../../shared/shared.module';
import {UserCardComponent} from './components/user-card/user-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserCardComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class HomeModule {
}
