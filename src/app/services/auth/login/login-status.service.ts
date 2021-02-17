import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserInfo,LoggedStatus } from './login.models';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService  {

  private userInfo = new BehaviorSubject<UserInfo>({isLogged:LoggedStatus.voidState, isLoggedFirebase:LoggedStatus.voidState});

  public getLoginStatus():Observable<UserInfo>{
    return this.userInfo.asObservable();
  }

  constructor() {
    
   }

  public updateUserInfo(params:any){
      let current = this.userInfo.getValue();
      this.userInfo.next({...current,...params});
  }
}