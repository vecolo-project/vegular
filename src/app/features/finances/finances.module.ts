import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FinancesComponent} from './containers/finances/finances.component';
import {FinancesRoutingModule} from './finances-routing.module';


@NgModule({
  declarations: [
    FinancesComponent
  ],
  imports: [
    CommonModule,
    FinancesRoutingModule
  ]
})
export class FinancesModule {
}
