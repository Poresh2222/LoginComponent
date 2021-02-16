import { ValidatorFn, AbstractControl } from '@angular/forms';

export function patternValidator(nameRe: RegExp,msg:string,regexp_negative:boolean=false): ValidatorFn {
return (control: AbstractControl): {[key: string]: any} | null => {
    let testValue = nameRe.test(control.value);
    const isVlaid = regexp_negative? !testValue: testValue;
    return isVlaid ? null: {'pattern': {"msg": msg}} ;
};
}