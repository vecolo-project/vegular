import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IssueComponent} from './containers/issue/issue.component';

const userIssuesRoutes: Routes = [
  {path: '', component: IssueComponent}
];

@NgModule({
  imports: [RouterModule.forChild(userIssuesRoutes)],
  exports: [RouterModule]
})
export class UserIssuesRoutingModule {
}
