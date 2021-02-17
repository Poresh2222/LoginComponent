import { Component, EventEmitter, Inject, Output, PLATFORM_ID } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';


import { Router, ActivatedRoute } from '@angular/router';
import { LoginEmailService } from '../../../services/auth/login/login-email.service';
import { takeUntil } from 'rxjs/operators';
import { BasePageComponent } from '../../base-page/base-page.component';
import { LoginEmailResponse, UserInfo } from '../../../services/auth/login/login.models';
import { MatDialog } from '@angular/material/dialog';
import { WrongPasswordDialogComponent } from '../wrong-password/wrong-password-dialog/wrong-password-dialog.component';
import { DialogConfig, SMALL_DIALOG_CONFIG } from '../../dialog/dialog.config';
import { TranslationConfig } from 'src/app/utils/translate-config';
import { lostPasswordTrx, signUpTrx } from 'src/app/router-translation.labels';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BasePageComponent {

  formSubmited: boolean = false;
  loginResponse: UserInfo;
  hidePassword = true;
  dialogSize: DialogConfig = SMALL_DIALOG_CONFIG;
  singnUrl: string = this.translationConfig.getTranslation(signUpTrx);
  lostPasswordUrl: string = this.translationConfig.getTranslation(lostPasswordTrx);

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required]],
    password: ['', Validators.required]
  });

  @Output() closeEvent = new EventEmitter();

  closeDialog(url: string): void {
    this.closeEvent.next(url);
  }

  constructor(
    public dialog: MatDialog,
    protected loginService: LoginEmailService,
    protected translationConfig: TranslationConfig,
    public formBuilder: FormBuilder) {
    super()
  }

  ngOnInit() {
  }

  onCreateAccountRequested() {
  }

  openLostPasswordDialog(msg?: string): void {
    const dialogRef = this.dialog.open(WrongPasswordDialogComponent, {
      ...this.dialogSize,
      panelClass: "transparent",
      data: { msg: msg }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (dialogRef.componentInstance.redirectUrl){
        this.closeDialog(dialogRef.componentInstance.redirectUrl);
      }
    });
  }


  onSubmit(loginForm) {
    if (this.formSubmited) return;
    this.formSubmited = true;
    this.loginService.requestLoginUser(loginForm).pipe(takeUntil(this.unsubscribe)).subscribe((resp) => {
      console.log("loging success",resp)
      this.loginResponse = resp;
      this.loginSuccessfull();
    }, err => {
      console.log("login error",err);
      this.formSubmited = false;
      if (err.status === 406) {
        if (err.remind_label && err.remind_label === "Reset password") {
          this.openLostPasswordDialog();
        }
        else {
          this.openLostPasswordDialog(err.error_message);
        }
      }
    });
  }

  loginSuccessfull() {
    this.closeDialog('../');
  }

  signup() {
    this.closeDialog('../'+this.singnUrl);
  }

  lostPassword() {
    this.closeDialog('/'+this.lostPasswordUrl);
  }

}
