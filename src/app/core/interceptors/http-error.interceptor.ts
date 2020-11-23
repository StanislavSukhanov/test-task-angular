import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppStorageService } from '../../services/app-storage-service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private storageService: AppStorageService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      const url = this.router.url ? this.router.url.replace('/', '') : '';
      if (err.status === 401 && url !== 'auth/login' && url !== 'auth/register') {
        // auto logout if 401 response returned from api
        this.storageService.remove('token');
        this.router.navigate(['/auth']);
      }
      return throwError(err);
    }));
  }
}
