import { Injectable } from '@angular/core';
import { FormServicesModule } from '../form-services.module';

@Injectable({
  providedIn: FormServicesModule
})
export class FormMessageResolverService {

  constructor() { }

  private keys: { [key: string]: string } = {
    REQUIRED_ERROR: "Este campo es requerido.",
    EMAIL_ERROR: "Este campo debe de ser un email válido.",
    MATCH_ERROR: "La contraseña y confirmación de contraseña no coinciden.",
    PWD_LENGTH_ERROR: "La contraseña debe estar entre 7 y 30 caracteres de longitud.",
    MIN_LENGTH_ERROR: "Este campo debe tener {requiredLength} caracteres o más",
    MAX_LENGTH_ERROR: "Este campo no debe sobrepasar los {requiredLength} caracteres",
    MAX_VALUE_ERROR: "Este campo no puede sobrepasar {max}",
    MIN_VALUE_ERROR: "Este campo no puede ser menor a {min}",
    SIGNUP_OK: "Se ha registrado el usuario correctamente",
    PATTERN_NOT_MATCH: "Este campo no cumple con el formato requerido",
  }

  private formStatusMessages: { [key: number]: string } = {
    999: 'Lo sentimos, ha ocurrido un error: ${errorMessage}',
    0: 'Lo sentimos, No hay conexión con el servidor.',
    401: 'Las credenciales que has ingresado, son incorrectas.',
  }

  private validatorKeys: { [key: string]: string } = {
    required: "REQUIRED_ERROR",
    email: "EMAIL_ERROR",
    noMatch: "MATCH_ERROR",
    "minlength.password": "PWD_LENGTH_ERROR",
    "maxlength.password": "PWD_LENGTH_ERROR",
    minlength: "MIN_LENGTH_ERROR",
    maxlength: "MAX_LENGTH_ERROR",
    max: "MAX_VALUE_ERROR",
    min: "MIN_VALUE_ERROR",
    pattern: "PATTERN_NOT_MATCH",
  }

  getErrorMessage(key: string): string | undefined {
    return this.keys[key];
  }

  getFormStatusMessage(status: number): string {
    const statusMsg = this.formStatusMessages[status]
    return statusMsg ? statusMsg : this.formStatusMessages[999];
  }

  getFromValidatorKey(key: string, injectTemplate: object = {}, context?: string): string | undefined {
    const validationKey = this.validatorKeys[!context ? key : `${key}.${context}`];
    if (!validationKey) return `Error validating input: ${key ?? ''} ${JSON.stringify(injectTemplate) ?? ''} ${context ?? ''}`;
    let message = this.keys[validationKey];
    Object.entries(injectTemplate).forEach(([template, value]) => {
      message = message.replace(new RegExp(`{${template}}`, 'g'), value);
    });
    return message;
  }

  getMessage(key: string): string | undefined {
    return this.keys[key];
  }
}
