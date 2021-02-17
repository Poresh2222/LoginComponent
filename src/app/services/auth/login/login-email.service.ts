import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, combineLatest, of } from 'rxjs';
import { switchMap, mergeMap } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { LoginEmailResponse } from './login.models';
import { LOGIN_EMAIL_URL } from '../../http/base-http.service';
import { BaseUsermgrService } from '../../http/base-usermgr.service';
import { CookieService } from 'ngx-cookie-service';
import { UserInfo, LoggedStatus } from './login.models';
import { LoginStatusService } from './login-status.service';
//import { UserInfoService } from '../check-session/user-info.service';
//import { AngularFireAuth } from '@angular/fire/auth';
//import { FirebaseAuthService } from '../firebase/firebase-auth.service';
import { HOST_NAME } from 'src/app/app-routing.module';
import { domain } from 'process';

@Injectable({
  providedIn: 'root'
})
export class LoginEmailService extends BaseUsermgrService {




  constructor(http: HttpClient, cookie: CookieService, private loginStatusService: LoginStatusService,
    //private userInfoLoginService: UserInfoService,
    @Inject(LOCALE_ID) public locale: string,
    //private faService: FirebaseAuthService,
    @Inject(HOST_NAME) public hostName
  ) {
    super(http, cookie, locale, hostName);
  }

  

  requestLoginUser(loginForm: FormGroup): Observable<UserInfo> {
    console.log(loginForm)
  }
}