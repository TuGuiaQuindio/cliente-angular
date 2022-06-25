import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";
import { FormServicesInjector } from "src/app/modules/form-services/form-services.module";
import { FormMessageResolverService } from "src/app/modules/form-services/services/form-message-resolver.service";
import { WarningMessenger } from "../interfaces/warning-messenger";

export type WarningMessengerDict = { [key: string]: WarningMessenger };
const messageResolver = FormServicesInjector.get(FormMessageResolverService);

export const handleFormErrors = (form: FormGroup, inputRefs: WarningMessengerDict) => {
  const errorKeys = Object.keys(form.controls)
  for (let key of errorKeys) {
    const control = form.controls[key];
    const inputComponent = inputRefs[key];
    const errorMsg = getFirstControlError(control, inputComponent.context);
    if (!inputComponent) return;
    inputComponent.warningMsg = errorMsg;
  }
}

export const getFirstControlError = (control: AbstractControl, context?: string): string => {
  if (hasNoErrors(control)) return "";
  return getFirstError(control.errors!, context)
}

export const getAllControlErrors = (control: AbstractControl, context?: string): string[] => {
  if (hasNoErrors(control)) return [];
  return getErrors(control.errors!, context);
}

const hasNoErrors = (control: AbstractControl) => !control.errors || Object.entries(control.errors!).length == 0;

const getFirstError = (errors: ValidationErrors, context?: string): string => {
  const keys = Object.keys(errors);
  const key = keys[0]
  const error = errors[key];
  return messageResolver.getFromValidatorKey(key, error, context) ?? "";
}

const getErrors = (errors: ValidationErrors, context?: string): string[] => {
  const keys = Object.keys(errors);
  const errorMsgs: string[] = [];
  for (let key of keys) {
    const error = errors[key];
    const msg = messageResolver.getFromValidatorKey(key, error, context);
    if (!msg) continue;
    errorMsgs.push(msg);
  }
  return errorMsgs;
}

