/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpXsrfTokenExtractor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class XsrfInterceptor implements HttpInterceptor {
  constructor(private xsrfTokenExtractor: HttpXsrfTokenExtractor) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let requestToken = this.xsrfTokenExtractor.getToken();
    requestToken = requestToken ? requestToken : '';
    return next.handle(
      req.clone({
        headers: req.headers.set('X-XSRF-TOKEN', requestToken),
      })
    );
  }
}
