import { Route } from '@angular/router';
import {
  DemoComponent,
  PageNotFoundComponent,
} from '@widget-waffle/widget-waffle-core';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/demo', pathMatch: 'full' },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
