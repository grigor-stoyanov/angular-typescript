import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Injectable, Provider} from "@angular/core";
import {catchError, EMPTY, mergeMap, Observable, tap, throwError} from "rxjs";
import {environment} from '../environments/environment'

const apiUrl = environment.apiUrl

// This interceptor catches the request creates a clone with a new header and resends it for the proper url
@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let request = req;
    if (req.url.startsWith('/api')) {
      request = req.clone({
      url: req.url.replace('/api', apiUrl)
    })
    }

    return next.handle(request).pipe(
      tap((request) => {
        if (request instanceof HttpResponse) {
          console.log(request.body)
        }
      }),
      catchError(err => {
        if(err.status===0){
          console.log('UNKNOWN ERROR')
          return EMPTY;
        }
        // return [err];
        // return Promise.reject(err)
        return throwError(()=>err)
      })
    )
  }
}

