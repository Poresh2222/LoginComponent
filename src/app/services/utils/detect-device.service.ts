import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

export enum DEVICE_TYPE {   // { any , any }
  MOBILE,
  DESKTOP
}

@Injectable({
  providedIn: 'root'
})
export class DetectDeviceService {

  constructor( private deviceService: DeviceDetectorService) { }

  isDesktop() {   // detect platform
    return this.deviceService.isDesktop();
  }

}
