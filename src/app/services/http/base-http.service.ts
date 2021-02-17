import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { throwError } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

export const REGISTRATION: string = "/registration/"
export const LOGIN_EMAIL_URL: string = "/user/login/?product_type=casino";

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  apiUrl: string;

  constructor(
    protected http: HttpClient,
    protected cookie: CookieService,
    @Inject(LOCALE_ID)
    public locale: string
  ) { }

  createHeaders(headers: {
    [name: string]: string | string[];
  } = {}): HttpHeaders {
    const newHeaders = {};
    Object.assign(newHeaders, headers);
    const csrfToken = this.cookie.get('csrftoken');
    newHeaders['Content-language'] = this.locale;
    newHeaders['Accept-Language'] = `pl-PL,${this.locale}`;
    newHeaders['x-translation-lang'] = this.locale.slice(0, 2);
    newHeaders['Content-Type'] = 'application/x-www-form-urlencoded';
    if (csrfToken) {
      newHeaders['X-CSRFToken'] = csrfToken;
    }
    return new HttpHeaders(newHeaders);
  }

  setApiUrl(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  protected postRequest<T>(url: string, formGroup: FormGroup) {
    return this.http.post<T>(this.apiUrl + url, formGroup.value);
  }

  protected getRequest<T>(url: string, formGroup: FormGroup) {
    return this.http.get<T>(this.apiUrl + url, { params: formGroup.value });
  }

  protected getRequestParam<T>(url: string, paramName: string, paramValue: string) {
    const options = { params: new HttpParams().set(paramName, paramValue) };
    return this.http.get<T>(this.apiUrl + url, options);
  }


  protected getRequestHttpParams<T>(url: string, reqParams: HttpParams) {
    const options = {
      params: reqParams,
      headers: this.createHeaders(),
      withCredentials: true
    };
    console.log(options)
    return this.http.get<T>(this.apiUrl + url, options);
  }

  protected get<T>(url: string) {
    return this.http.get<T>(this.apiUrl + url);
  }

  protected handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    if (error.status === 406) {
      return throwError(
        error);
    }
    else {
      return throwError(
        "Some unexpected error occured.");
    }

  }
}
