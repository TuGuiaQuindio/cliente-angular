import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormMessageResolverService {

  constructor() { }

  private keys: {[key: string]: string} = {
    REQUIRED_ERROR: "Este campo es requerido.",
    EMAIL_ERROR: "Este campo debe de ser un email válido."
  }

  private validatorKeys: {[key: string]: string} = {
    required: "REQUIRED_ERROR",
    email: "EMAIL_ERROR"
  }

  getErrorMessage(key: string): string | undefined {
    return this.keys[key];
  }

  getFromValidatorKey(key: string): string | undefined {
    const validationKey = this.validatorKeys[key];
    if (!validationKey) return undefined;
    return this.keys[validationKey];
  }
}
