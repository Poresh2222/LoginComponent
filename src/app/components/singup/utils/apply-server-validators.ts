import { Validators, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { patternValidator } from '../../../utils/pattern-validator';
import { RegistrationFields } from '../../../services/singup/registration.models';

export function applyServerValidators(resp: RegistrationFields, form: FormGroup) {
  Object.keys(resp.fields).forEach(name => {
    let validators = []
    const formControl = form.get(name);
    if (!formControl) return;
    const values = resp.fields[name];

    if (values.max_length) {
      validators.push(Validators.maxLength(values['max_length']));
    }
    if (values.min_length) {
      validators.push(Validators.minLength(values['min_length']));
    }
    if (values.required) {
      validators.push(Validators.required);
    }

    if(name==='email'){
      validators.push(Validators.email);
    }
    if (values.widget && values.widget.attrs && values.widget.attrs.patterns) {

      values.widget.attrs.patterns.forEach((pattern) => {
        Object.keys(pattern).forEach(prop => {
          if (prop !== "ignore_case" && prop !== "regex_negative") {
            validators.push(patternValidator(new RegExp(pattern[prop]), values.error_messages[prop], pattern.regex_negative));
          }
        })
      })
    }


    formControl.setValidators(validators);
  });
  form.get('current_step').setValue(resp.current);

}

export function applyServerErrors(error: HttpErrorResponse, form: FormGroup) {
  Object.keys(error.error.errors).forEach(prop => {
    console.log(prop,error.error.errors[prop]);
    const formControl = form.get(prop);
    if (formControl) {
      // activate the error message
      formControl.setErrors({
        serverError: error.error.errors[prop]
      });
    }
  });
}
