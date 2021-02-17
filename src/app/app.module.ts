import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule} from './modules/angular-material.module';
import { SingupDialogComponent, SingupDialogRouteComponent } from './components/singup/singup-dialog/singup-dialog.component';
import { SingupFormComponent } from './components/singup/singup-form/singup-form.component';
import { SingupStepOneComponent } from './components/singup/singup-step-one/singup-step-one.component';
import { SingupStepTwoComponent } from './components/singup/singup-step-two/singup-step-two.component';
import { SingupStepThreeComponent } from './components/singup/singup-step-three/singup-step-three.component';
import { StepperComponent } from './components/singup/stepper/stepper.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginDialogComponent, LoginDialogRouteComponent } from './components/login/login-dialog/login-dialog.component';
import { CloseDialogButtonComponent } from './components/dialog/close-dialog-button/close-dialog-button.component';
import { ConfirmDialogComponent } from './components/dialog/confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './components/dialog/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from './components/dialog/success-dialog/success-dialog.component';
import { StartpageComponent } from './components/startpage/startpage.component';
import { WrongPasswordComponent } from './components/login/wrong-password/wrong-password.component';
import { WrongPasswordDialogComponent } from './components/login/wrong-password/wrong-password-dialog/wrong-password-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SingupDialogComponent,
    SingupDialogRouteComponent,
    SingupFormComponent,
    SingupStepOneComponent,
    SingupStepTwoComponent,
    SingupStepThreeComponent,
    StepperComponent,
    LoginComponent,
    LoginDialogComponent,
    LoginDialogRouteComponent,
    CloseDialogButtonComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    StartpageComponent,
    WrongPasswordComponent,
    WrongPasswordDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
