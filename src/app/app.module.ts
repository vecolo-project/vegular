import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { FormBuilder } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    CommonModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    AkitaNgDevtools.forRoot(),
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
