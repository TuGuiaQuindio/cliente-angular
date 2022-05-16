import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import { FormServicesInjector } from "src/app/modules/form-services/form-services.module";
import { FormMessageResolverService } from "src/app/modules/form-services/services/form-message-resolver.service";
import { WarningMessenger } from "../interfaces/warning-messenger";

const messageResolver = FormServicesInjector.get(FormMessageResolverService);

export const handleFormErrors = (form: FormGroup, inputRefs: {[key: string]: WarningMessenger}) => {
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

