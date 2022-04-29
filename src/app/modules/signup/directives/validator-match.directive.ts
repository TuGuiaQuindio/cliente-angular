import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appMatchPassword]'
})
export class ValidatorMatchDirective {

  static matchWith(firstControlName: string, secondControlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const firstControl = control.get(firstControlName);
      const secondControl = control.get(secondControlName);
      if (!firstControl || !secondControl) return { 'noMatch': true };
      const notMatching = firstControl.value !== secondControl.value;
      if (notMatching) {
        const currentErrors = secondControl.errors;
        secondControl.setErrors({...currentErrors, 'noMatch': true})
        return { 'noMatch': true };
      }else {
        const errors = secondControl.errors;
        if (!errors) return null;
        delete errors['noMatch'];
        secondControl.setErrors(errors);
      };
      return null;
    }
  }

}
