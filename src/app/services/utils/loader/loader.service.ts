import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private showLoader = new BehaviorSubject<boolean>(false);

  constructor() { }

  show(){
    this.showLoader.next(true);
  }

  hide(){
    this.showLoader.next(false);
  }

  attach():Observable<boolean>{
    return this.showLoader.asObservable();
  }
}
