import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appMaxCount]',
  providers: [
    {
      // Validator Token used by all validators
      provide: NG_VALIDATORS,
      // Provide Yourself - something which already exists same instance
      useExisting: MaxCountDirective,
      // Provide multiple values for 1 key
      multi: true
    }
  ]
})
export class MaxCountDirective implements Validator {
  @Input() appMaxCount: number | undefined;

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (this.appMaxCount === undefined || control.value?.length === 0 || control.value?.length <= this.appMaxCount) {
      return null;
    } else {
      return {
        appMaxCount: this.appMaxCount
      }
    }


  }

  // registerOnValidatorChange(fn: () => void): void {
  //   throw new Error("Method not implemented")
  // }

  constructor() {
  }

}
