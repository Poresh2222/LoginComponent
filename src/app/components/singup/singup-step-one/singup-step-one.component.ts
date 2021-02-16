import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { takeUntil } from 'rxjs/operators';

import { BasePageComponentWithDialogs } from '../../base-page/base-page.component';
import { RegistrationService } from '../../../services/singup/registration-fields.service';
import { RegistrationFields} from '../../../services/singup/registration.models';
import { applyServerErrors, applyServerValidators } from '../utils/apply-server-validators';
import { DetectDeviceService } from 'src/app/services/utils/detect-device.service';

@Component({
  selector: 'app-singup-step-one',
  templateUrl: './singup-step-one.component.html',
  styleUrls: ['./singup-step-one.component.scss']
})
export class SingupStepOneComponent extends BasePageComponentWithDialogs {

  registerForm1 = this.formBuilder.group({
    login: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
    current_step: new FormControl('', [])
  });

  @Output() isCompleted = new EventEmitter<boolean>();
  private _registrationFields: RegistrationFields;

  @Input()
  set registrationFields(name: RegistrationFields) {
    this._registrationFields = name;
    if (this._registrationFields)
    applyServerValidators(this._registrationFields, this.registerForm1);
  }
  
  

  get registrationFields(): RegistrationFields { return this._registrationFields; }


  formSubmited: boolean = false;
  hidePassword = true;

  constructor(
    private formBuilder: FormBuilder,
    errorDialog: MatDialog,
    private registrationService: RegistrationService,
    private detectDesktopService: DetectDeviceService,
  ) {
    super(errorDialog,detectDesktopService);
  }

  ngOnInit(): void {
    
  }


  onSubmit(registerForm1) {
    if (this.formSubmited || !this.registerForm1.valid) return;
    this.registrationService.postRegistrationStep(registerForm1).pipe(takeUntil(this.unsubscribe)).subscribe((resp) => {
      this.isCompleted.next(true);
    },
      (error) => {
      if(error.status === 400) {
        applyServerErrors(error,this.registerForm1);
        if (error.error.errors && error.error.errors.non_field_errors) this.openErrorDialog(error.error.errors.non_field_errors[0]);
      }
      else{
        this.openErrorDialog();
      }
    })
  }

}
