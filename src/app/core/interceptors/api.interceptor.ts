import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export const CUSTOM_URL_HEADER = "X-Custom-Ur";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.headers.has(CUSTOM_URL_HEADER)) {
      const headers = request.headers.delete(CUSTOM_URL_HEADER);
      return next.handle(request.clone({ headers }));
    }
    const url = environment.url_api /*+ request.url*/;
    const cloneReq = request.clone({ url });
    return next.handle(cloneReq);
  }
}
