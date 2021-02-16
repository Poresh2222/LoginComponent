import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { DomSanitizer } from '@angular/platform-browser';
import { takeUntil } from 'rxjs/operators';

import { BasePageComponent } from '../../base-page/base-page.component';
import { RegistrationService } from '../../../services/singup/registration-fields.service';
import { RegistrationFields, RegistrationCmsInfo } from '../../../services/singup/registration.models';
//import { RegistrationCmsDataService } from '';
import { LoaderService } from '../../../services/utils/loader/loader.service';

enum steps {
  stepOne = 'basicForm',
  stepTwo = 'homeAdress'
}

@Component({
  selector: 'app-singup-form',
  templateUrl: './singup-form.component.html',
  styleUrls: ['./singup-form.component.scss']
})
export class SingupFormComponent extends BasePageComponent implements AfterViewInit {

  isLinear = true;
  isCompleted1 = false;
  isCompleted2 = false;
  isEditable = false;
  fieldResponse1: RegistrationFields;
  fieldResponse2: RegistrationFields;
  isLoading = true;
  selectedIndex = 0;
  cmsData: RegistrationCmsInfo;

  @Output() closeEvent = new EventEmitter();

  closeDialog(url: string): void {
    this.closeEvent.next(url);
  }

  constructor(
    private route: ActivatedRoute,
    private registrationService: RegistrationService,
    //private cmsDataService:RegistrationCmsDataService,
    private loaderService: LoaderService,
    private sanitizer: DomSanitizer
  ) { super() }

  ngOnInit(): void {
    this.loaderService.show();

    //this.cmsDataService.fetchData().pipe(takeUntil(this.unsubscribe)).subscribe((resp) => {
    //  this.cmsData = resp;
    //  this.cmsData.signupCmsInfo.firstStepTeaser.safehtml = this.sanitizer.bypassSecurityTrustHtml(this.cmsData.signupCmsInfo.firstStepTeaser.html);
    //  this.cmsData.signupCmsInfo.registrationComplete.safehtml = this.sanitizer.bypassSecurityTrustHtml(this.cmsData.signupCmsInfo.registrationComplete.html);
    //})

  }

  ngAfterViewInit(): void {
    this.registrationService.requestRegistrationFields().pipe(
      takeUntil(this.unsubscribe)
    ).subscribe((resp) => {

      this.isLoading = false;

      if (resp.current === steps.stepTwo) {
        this.fieldResponse2 = resp;
        this.isCompleted1 = true;
        this.selectedIndex = 1;
      }
      else {
        this.fieldResponse1 = resp;
      }
      this.loaderService.hide();
    });
  }

  completeStepOne(result:boolean){
    this.isCompleted1 = result;
    this.selectedIndex = 1; 
    if (this.isCompleted1) {
      this.getAddressFields()
    }
  }

  completeStepTwo(result:boolean){
    this.isCompleted2 = result;
    this.selectedIndex = 2; 
  }

  completeStepThree(url:string){
    this.closeDialog(url);
  }

  private getAddressFields(){
      this.registrationService.requestRegistrationFields().pipe(takeUntil(this.unsubscribe)).subscribe((resp) => {
        this.fieldResponse2 = resp;
      });
    
  }

  public selectionChange($event?: StepperSelectionEvent): void {
    $event.selectedStep.completed = false;
    console.log("selected index",$event.selectedIndex)
    if ($event.selectedIndex === 2){
      this.getAddressFields();
    }
  }

}
