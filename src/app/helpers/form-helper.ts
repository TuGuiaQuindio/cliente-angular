import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import { AppInjector } from "../app.module";
import { FormMessageResolverService } from "../core/services/form-message-resolver.service";
import { InputComponent } from "../modules/shared/input/input.component";

const messageResolver = AppInjector.get(FormMessageResolverService);

export const handleFormErrors = (form: FormGroup, inputRefs: {[key: string]: InputComponent}) => {
    const errorKeys = Object.keys(form.controls)
    for(let key of errorKeys){
      const control = form.controls[key];
      const errorMsg = getFirstControlError(control);
      const inputComponent = inputRefs[key];
      if (!inputComponent) return;
      inputComponent.warningMsg = errorMsg;
    }
}

export const getFirstControlError = (control: AbstractControl): string => {
  if (hasNoErrors(control)) return "";
  return getFirstError(control.errors!)
}

export const getAllControlErrors = (control: AbstractControl): string[] => {
  if (hasNoErrors(control)) return [];
  return getErrors(control.errors!);
}

const hasNoErrors = (control: AbstractControl) => !control.errors || Object.entries(control.errors!).length == 0;

const getFirstError = (errors: ValidationErrors): string => {
  const keys = Object.keys(errors);
  const key = keys[0]
  return messageResolver.getFromValidatorKey(key) ?? "";
}

const getErrors = (errors: ValidationErrors): string[] => {
  const keys = Object.keys(errors);
  const errorMsgs: string[] = [];
  for (let key of keys) {
    const msg = messageResolver.getFromValidatorKey(key);
    if (!msg) continue;
    errorMsgs.push(msg);
  }
  return errorMsgs;
}

