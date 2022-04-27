import { AbstractControl, ValidationErrors } from "@angular/forms";
import { AppInjector } from "../app.module";
import { FormMessageResolverService } from "../core/services/form-message-resolver.service";

const messageResolver = AppInjector.get(FormMessageResolverService);

export const getFirstControlError = (control: AbstractControl): string => {
  if (hasErrors(control)) return "";
  return getFirstError(control.errors!)
}

export const getAllControlErrors = (control: AbstractControl): string[] => {
  if (hasErrors(control)) return [];
  return getErrors(control.errors!);
}

const hasErrors = (control: AbstractControl) => !control.errors || Object.entries(control.errors!).length == 0;

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

