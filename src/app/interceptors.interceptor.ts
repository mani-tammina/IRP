import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable()
export class InterceptorsInterceptor implements HttpInterceptor {
  

  constructor(private router:Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized error
          console.log('Unauthorized Error');
          // Redirect to login page
          this.router.navigate(['/login']);
        } else if (error.status === 404) {
          // Not Found error
          console.log('Not Found Error');
        } else {
          // Other errors
          console.log('Error:', error.message);
        }
        return throwError(error);
      })
    );
    }
}
