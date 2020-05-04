import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private notificationService: ToastrService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(request.url);
    return next.handle(request).pipe(
      catchError(errorResponse => { 
        console.error(JSON.stringify(errorResponse));
        if (
          errorResponse instanceof HttpErrorResponse &&
          errorResponse.status === 401
        ) {
          this.router.navigate(['unauth']);
        }
        if (
          errorResponse instanceof HttpErrorResponse &&
          errorResponse.status === 409
        ) {
          this.notificationService.error(errorResponse.error.message,
            errorResponse.error.error);
        } else if(errorResponse instanceof HttpErrorResponse &&
          errorResponse.status === 0) {
            this.notificationService.error('Unable to connect to Server , Please contact admin',
             'Server Connection Error'
            );
        }
        else if(errorResponse instanceof HttpErrorResponse &&
          errorResponse.status === 200 && errorResponse.error!= null && errorResponse.error!= undefined ) {
            this.notificationService.success( errorResponse.error.text,
              'Success'
            );
        }
        else {
          if (errorResponse.error != undefined) {
            this.notificationService.error( errorResponse.message,
              errorResponse.error.error
            );
          } else {
            this.notificationService.error(errorResponse.message,
              'error'
            );
          }
        }

        return of(null);
      })
    );
  }
}
