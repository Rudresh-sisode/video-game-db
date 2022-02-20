import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        //69e9dffdb9mshff273b99717632dp1aad83jsn0fe4187565c8
        'x-rapidapi-key': '69e9dffdb9mshff273b99717632dp1aad83jsn0fe4187565c8',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '7f3bc34843b049e98e2068ba7a4c7da8',
        //7f3bc34843b049e98e2068ba7a4c7da8
      }
    });
    return next.handle(req);
  }
}
