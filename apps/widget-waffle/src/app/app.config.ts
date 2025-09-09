/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { WidgetWafflePreset } from '@widget-waffle/widget-waffle-styles';

import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
} from '@angular/router';
import { appRoutes } from './app.routes';
import {
  JwtInterceptorProvider,
  WithCredentialsInterceptorService,
  XsrfInterceptor,
} from '@widget-waffle/widget-waffle-core';

import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
  withXsrfConfiguration,
} from '@angular/common/http';

import { BrowserModule } from '@angular/platform-browser';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: WidgetWafflePreset,
        options: {
          darkModeSelector: false,
        },
      },
    }),

    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    provideHttpClient(),

    JwtInterceptorProvider,

    {
      provide: HTTP_INTERCEPTORS,
      useClass: WithCredentialsInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: XsrfInterceptor,
      multi: true,
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    { provide: MAT_DATE_LOCALE, useValue: 'en-NZ' },

    provideHttpClient(
      withInterceptorsFromDi(),
      withXsrfConfiguration({
        cookieName: 'XSRF-REQUEST-TOKEN',
        headerName: 'X-XSRF-TOKEN',
      })
    ),
  ],
};
