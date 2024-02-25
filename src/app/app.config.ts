import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import {fruitroutes} from './fruits/fruits-routing.module'
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes) ]
};
