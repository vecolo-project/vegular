import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {enableAkitaProdMode} from '@datorama/akita';
import {AppRoutingModule} from './app/app-routing.module';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
