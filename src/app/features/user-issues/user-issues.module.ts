import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IssueComponent} from './containers/issue/issue.component';
import {UserIssuesRoutingModule} from './user-issues-routing.module';


@NgModule({
  declarations: [
    IssueComponent
  ],
  imports: [
    UserIssuesRoutingModule,
    CommonModule
  ]
})
export class UserIssuesModule {
}
