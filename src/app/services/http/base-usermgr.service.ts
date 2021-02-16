import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup } from '@angular/forms';
import { HttpParams } from "@angular/common/http";

import { BaseHttpService } from './base-http.service';
import { HOST_NAME } from '../../app-routing.module';
import { environment } from 'src/environments/environment';
import { CustomEncoder} from '../../interceptors/encode-http.interceptor';

@Injectable({
  providedIn: 'root'
})
export class BaseUsermgrService extends BaseHttpService {

  constructor(
    http: HttpClient,
    protected cookie: CookieService,
    @Inject(LOCALE_ID)
    public locale: string,
    @Inject(HOST_NAME)
    public hostName) {

    super(http, cookie, locale)
    const apiUrl = environment.production? environment.apiUrl+this.hostName : environment.apiUrl;
    super.setApiUrl(apiUrl);
  }

  protected postRequest<T>(url: string, formGroup: FormGroup) {
    const httpOptionsDefault = {
      headers: this.createHeaders(),
      withCredentials: true
    };
    const params = new HttpParams({
      encoder: new CustomEncoder(),
      fromObject: formGroup.value
    });

    return this.http.post<T>(this.apiUrl + url, params, { ...httpOptionsDefault });
  }

  get<T>(url: string) {
    const httpOptionsDefault = {
      headers: this.createHeaders(),
      withCredentials: true
    };

    return this.http.get<T>(this.apiUrl + url, { ...httpOptionsDefault })
  }

  options<T>(url: string) {
    const httpOptionsDefault = {
      headers: this.createHeaders(),
      withCredentials: true
    };

    return this.http.options<T>(this.apiUrl + url, { ...httpOptionsDefault })
  }

}
