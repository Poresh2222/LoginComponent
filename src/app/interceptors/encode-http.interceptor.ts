import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpParams, HttpParameterCodec } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, tap } from 'rxjs/operators';

@Injectable()
export class EncodeHttpParamsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const start = performance.now(); 
    const params = new HttpParams({encoder: new CustomEncoder(), fromString: req.params.toString()});
    return next.handle(req.clone({params})).pipe(
      tap(res => {
      console.log('took '+req.url + (performance.now() - start) + 'ms');
    })
    )
  }
}


export class CustomEncoder implements HttpParameterCodec {
  encodeKey(key: string): string {
    return encodeURIComponent(key);
  }

  encodeValue(value: string): string {
    return encodeURIComponent(value);
  }

  decodeKey(key: string): string {
    return decodeURIComponent(key);
  }

  decodeValue(value: string): string {
    return decodeURIComponent(value);
  }
}
