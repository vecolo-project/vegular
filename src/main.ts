import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import {akitaDevtools, enableAkitaProdMode, persistState} from '@datorama/akita';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
} else {
  akitaDevtools();
}

persistState({include: ['session'], storage: sessionStorage});


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
