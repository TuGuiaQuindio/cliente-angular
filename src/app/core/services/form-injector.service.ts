import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class FormInjectorService {

  constructor() { }

  public start(formGroup: FormGroup): FormInjectionSpecification {
    return new FormInjectionSpecification(formGroup);
  }
}

export type InjectionAliases = { [key: string]: string };
export class FormInjectionSpecification {
  constructor(public formGroup: FormGroup) { }
  public injectionAliases?: InjectionAliases;

  public withAliases(aliases: InjectionAliases): FormInjectionSpecification {
    this.injectionAliases = aliases;
    return this;
  }

  public inject(values: Object) {
    const aliasedValues = this.injectionAliases ? this.setAliases(values) : values;
    this.handleInjection(this.formGroup, aliasedValues);
  }

  private setAliases(values: Object) {
    if (!this.injectionAliases) return values;
    const output: { [key: string]: any } = {};
    Object.entries(values).forEach(({ 0: key, 1: value }) => {
      let newKey = key in this.injectionAliases!
        ? this.injectionAliases![key]
        : key;
      output[newKey] = value;
    });
    return output;
  }

  private handleInjection(form: FormGroup, values: any) {
    Object.entries(form.controls).forEach(({ 0: name, 1: control }) => {
      if (control instanceof FormGroup) {
        this.handleInjection(control as FormGroup, values);
      } else if (name in values) {
        (control as FormControl).setValue(values[name]);
      }
    });
  }
}
