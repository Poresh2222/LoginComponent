import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule} from './modules/angular-material.module';
import { SingupDialogComponent } from './components/singup/singup-dialog/singup-dialog.component';
import { SingupFormComponent } from './components/singup/singup-form/singup-form.component';
import { SingupStepOneComponent } from './components/singup/singup-step-one/singup-step-one.component';
import { SingupStepTwoComponent } from './components/singup/singup-step-two/singup-step-two.component';
import { SingupStepThreeComponent } from './components/singup/singup-step-three/singup-step-three.component';
import { StepperComponent } from './components/singup/stepper/stepper.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginDialogComponent } from './components/login/login-dialog/login-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SingupDialogComponent,
    SingupFormComponent,
    SingupStepOneComponent,
    SingupStepTwoComponent,
    SingupStepThreeComponent,
    StepperComponent,
    LoginComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
