import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FinancesComponent} from './containers/finances/finances.component';

const financesRoutes: Routes = [
  {path: '', component: FinancesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(financesRoutes)],
  exports: [RouterModule]
})
export class FinancesRoutingModule {
}
