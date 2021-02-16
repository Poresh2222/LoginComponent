import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { BasePageComponentWithDialogs } from '../../base-page/base-page.component';
import { RegistrationService } from '../../../services/singup/registration-fields.service';
import { applyServerValidators, applyServerErrors } from '../utils/apply-server-validators';
import { RegistrationFields } from '../../../services/singup/registration.models';
import { termsTrx } from '../../../router-translation.labels';
import { DetectDeviceService } from 'src/app/services/utils/detect-device.service';

@Component({
  selector: 'app-signup-step-two',
  templateUrl: './singup-step-two.component.html',
  styleUrls: ['./singup-step-two.component.scss']
})
export class SingupStepTwoComponent extends BasePageComponentWithDialogs {

  formSubmited: boolean = false;

  termsUrl: string = termsTrx;

  @Output() isCompleted = new EventEmitter<boolean>();

  registerForm2 = this.formBuilder.group({
    // postal_code: ['', Validators.required],
    // address_1: ['', Validators.required],
    // city: ['', [Validators.required]],
    country: ['', [Validators.required]],
    first_name: ['', [Validators.required]],
    last_name: ['', [Validators.required]],
    currency: ['', [Validators.required]],
    accept_terms: ['', [Validators.required]],
    marketing_consents: [true, [Validators.required]],
    current_step: new FormControl('', [])
  });

  currencies: [{ display: string, value: string }];
  countries: [{ display: string, value: string }];
  ipCountry: string;

  private _registrationFields: RegistrationFields;

  @Input()
  set registrationFields(name: RegistrationFields) {
    this._registrationFields = name;
    if (this._registrationFields) {
      console.log(this._registrationFields)
      applyServerValidators(this._registrationFields, this.registerForm2);
      this.updateFields(name);
    }

  }

  get registrationFields(): RegistrationFields { return this._registrationFields; }

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    errorDialog: MatDialog,
    private detectDesktopService: DetectDeviceService,


  ) {
    super(errorDialog, detectDesktopService);
  }

  updateFields(fields: RegistrationFields) {
    this.registerForm2.get('country').setValue(fields.user_ip_country);
    this.countries = fields.fields.country.choices;
    this.currencies = fields.fields.currency.choices;
  }

  ngOnInit() {
  }

  onSubmit(registerForm2) {
    if (this.formSubmited || !this.registerForm2.valid) return;
    this.registrationService.postRegistrationStep(registerForm2).pipe(takeUntil(this.unsubscribe)).subscribe((resp) => {
      this.isCompleted.next(true);
    },
      (error) => {
        if (error.status === 400) {
          applyServerErrors(error, this.registerForm2);
        }
        else {
          this.openErrorDialog();
        }

      })

  }

}