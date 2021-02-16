import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';

import { DetectDeviceService } from '../../services/utils/detect-device.service';
import { BaseComponent } from '../base/base.component';
import { SMALL_DIALOG_CONFIG, CONFIRM_DIALOG_CONFIG, DialogConfig, DESKTOP_SMALL } from '../dialog/dialog.config';
import { ErrorDialogComponent } from '../dialog/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from '../dialog/success-dialog/success-dialog.component';
import { ConfirmDialogComponent } from '../dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss']
})
export class BasePageComponent extends BaseComponent {

  protected _data: any;

  @Input()
  set data(dataInput: any) {
    this._data = dataInput;
  }

  get data(): any { return this._data }

  constructor() { super() }

  ngOnInit(): void {
  }

}

export type ConfirmationResponse = {
  isConfirmed: boolean;
  data: any;
}

@Component({
  template: ''
})
export class BasePageComponentWithDialogs extends BasePageComponent {

  constructor(
    public errorDialog: MatDialog,
    private deviceDetectService: DetectDeviceService
  ) { super() }

  ngOnInit(): void {

  }

  openErrorDialog(msg?:string,title?:string): void {
    const size: DialogConfig = this.deviceDetectService.isDesktop() ? DESKTOP_SMALL :SMALL_DIALOG_CONFIG;
    const dialogRef = this.errorDialog.open(ErrorDialogComponent, {
      ...size,
      panelClass: "transparent",
      data: {msg:msg, title:title}
    });
  }

  openSuccessDialog(msg?:string,title?:string): void {
    const size: DialogConfig = this.deviceDetectService.isDesktop() ? DESKTOP_SMALL :SMALL_DIALOG_CONFIG;
    const dialogRef = this.errorDialog.open(SuccessDialogComponent, {
      ...size,
      panelClass: "transparent",
      data: {msg:msg, title:title}
    });
  }

  openConfirmDialog(msg:string, dataToConfrim:any, callback:Function): void {
    const size: DialogConfig = this.deviceDetectService.isDesktop() ? CONFIRM_DIALOG_CONFIG :SMALL_DIALOG_CONFIG;
    const dialogRef = this.errorDialog.open(ConfirmDialogComponent, {
      ...size,
      panelClass: "transparent",
      data: {msg:msg, dataRefToConfirm:dataToConfrim}
    });

    dialogRef.afterClosed().pipe(takeUntil(this.unsubscribe)).subscribe(
      (resp:ConfirmationResponse) => {
        if (resp && resp.isConfirmed) {
          this.confirm(resp.data);
        }
      }
    );
  }

  confirm(data:any){}
}
