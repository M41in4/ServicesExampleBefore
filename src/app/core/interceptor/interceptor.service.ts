import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = JSON.parse(localStorage.getItem('currentUser'));

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${user.token}`
      }
    });

    return next.handle(req);
  }
}
