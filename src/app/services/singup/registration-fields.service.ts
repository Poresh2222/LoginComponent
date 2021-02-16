import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { FormGroup } from '@angular/forms';

import { BaseUsermgrService } from '../http/base-usermgr.service';
import { HOST_NAME } from 'src/app/app-routing.module';
import { RegistrationFields, RegistrationStepResponse } from './registration.models';
import { REGISTRATION } from '../http/base-http.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService extends BaseUsermgrService {

  constructor(http: HttpClient,
    cookie: CookieService,
    @Inject(LOCALE_ID)
    public locale: string,
    @Inject(HOST_NAME)
    public hostName) {
    super(http, cookie, locale,hostName);
  }

  public requestRegistrationFields(): Observable<RegistrationFields> {
    return this.options<RegistrationFields>(REGISTRATION)
  }

  public postRegistrationStep(registrationStepForm:FormGroup): Observable<RegistrationStepResponse>{
    return super.postRequest<RegistrationStepResponse>(REGISTRATION, registrationStepForm);
  }
}
