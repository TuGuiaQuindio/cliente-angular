import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormMessageResolverService {

  constructor() { }

  private keys: {[key: string]: string} = {
    REQUIRED_ERROR: "Este campo es requerido.",
    EMAIL_ERROR: "Este campo debe de ser un email válido.",
    MATCH_ERROR: "La contraseña y confirmación de contraseña no coinciden.",
    PWD_LENGTH_ERROR: "La contraseña debe estar entre 7 y 30 caracteres de longitud.",
  }

  private formStatusMessages: { [key: number]: string } = {
    999: 'Lo sentimos, ha ocurrido un error: ${errorMessage}',
    0: 'Lo sentimos, No hay conexión con el servidor.',
    401: 'Las credenciales que has ingresado, son incorrectas.',
  }

  private validatorKeys: {[key: string]: string} = {
    required: "REQUIRED_ERROR",
    email: "EMAIL_ERROR",
    noMatch: "MATCH_ERROR",
    minlength: "PWD_LENGTH_ERROR",
    maxlength: "PWD_LENGTH_ERROR",
  }

  getErrorMessage(key: string): string | undefined {
    return this.keys[key];
  }

  getFormStatusMessage(status: number): string {
    const statusMsg = this.formStatusMessages[status]
    return statusMsg ? statusMsg : this.formStatusMessages[999];
  }

  getFromValidatorKey(key: string): string | undefined {
    const validationKey = this.validatorKeys[key];
    if (!validationKey) return undefined;
    return this.keys[validationKey];
  }
}
