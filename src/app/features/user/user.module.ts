import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './components/user-form/user-form.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UserFormComponent],
  imports: [CommonModule, SharedModule],
  exports: [UserFormComponent],
})
export class UserModule {}
