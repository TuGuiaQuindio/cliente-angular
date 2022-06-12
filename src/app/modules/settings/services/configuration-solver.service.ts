import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorMatchDirective } from '../../signup/directives/validator-match.directive';
import { SettingSectionDefinition } from '../components/panel-builder/panel-builder.component';
import { SettingsServicesModule } from './settings-services.module';

export type ConfigurationDefinition = { dataForm: FormGroup, sections: SettingSectionDefinition[] };
@Injectable({
  providedIn: SettingsServicesModule
})
export class ConfigurationSolverService {

  constructor(private fb: FormBuilder) { }
  private dataForms: { [key: string]: FormGroup } = {
    "module-security": this.fb.group({
      passwordChange: this.fb.group({
        password: ['', Validators.required],
        newPassword: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      }, { validators: [ValidatorMatchDirective.matchWith('newPassword', 'confirmPassword')] })
    }),
    "module-information-guide": this.fb.group({
      personalData: this.fb.group({
        email: this.fb.control({ value: "email@email.com", disabled: true }),
        document: this.fb.control({ value: "", disabled: true }),
        phoneNumber: ['', [Validators.pattern(/^(?:\(\+[0-9]{1,3}\)|\+[0-9]{1,3}|.?)\s?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{2,6}[\s-]?[0-9]{2,6}$/)]]
      }),
      additionalInfo: this.fb.group({
        city: ['', Validators.required],
        hasTransport: [false, Validators.required],
      })
    })
  }

  private configurationSection: { [key: string]: SettingSectionDefinition } = {
    "module-security.passwordChange": {
      title: "Cambio de contraseña", formGroup: this.getSectionalForm("module-security", "passwordChange"), inputs: [
        { name: "contraseña", description: "¿cuál es tu contraseña actual?", formControlName: "password", inputType: "password" },
        { name: "nueva contraseña", description: "escribe tu nueva contraseña aquí", formControlName: "newPassword", inputType: "password" },
        { name: "confirmar contraseña", description: "confirma tu nueva contraseña para estar seguros", formControlName: "confirmPassword", inputType: "password" },
      ]
    },
    "module-information-guide.personalData": {
      title: "Información personal del guía", formGroup: this.getSectionalForm("module-information-guide", "personalData"), inputs: [
        { name: "correo electrónico", description: "dirección de correo electrónico registrada", formControlName: "email", inputType: "email" },
        { name: "documento", description: "documento de identidad del guía", formControlName: "document", inputType: "text" },
        { name: "número de teléfono", description: "un número de contacto para que las empresas puedan hablar contigo", formControlName: "phoneNumber", inputType: "tel", example: {
            title: "Los formatos válidos son:",
            examples: [
              "(+57) 123 456 7789",
              "+57 123 4567789",
              "1234567789",
            ]
          }
        }
      ]
    },
    "module-information-guide.additionalInfo": {
      title: "Datos adicionales", formGroup: this.getSectionalForm("module-information-guide", "additionalInfo"), inputs: [
        { name: "ciudad", description: "lugar de residencia", formControlName: "city", inputType: "text" },
        { name: "cuento con transporte particular", description: "¿dispone de un vehiculo para el transporte?", formControlName: "hasTransport", inputType: "checkbox" }
      ]
    }
  }

  private moduleSections: { [key: string]: string[] } = {
    "module-security": ["passwordChange"],
    "module-information-guide": ["personalData", "additionalInfo"],
  }

  private rolePerSection: { [key: string]: { [key: string]: string } } = {
    "security": {
      "1": "module-security",
      "2": "module-security"
    },
    "information": {
      "1": "module-information-guide",
      "2": "module-information-company"
    }
  }

  public getSectionConfiguration(roleNumber: string | undefined, moduleName: string): ConfigurationDefinition | undefined {
    if (!roleNumber) return undefined;
    const sectionRole = this.rolePerSection[moduleName];
    if (!sectionRole) return undefined;
    const identifier = sectionRole[roleNumber];
    if (!identifier) return undefined;
    return this.buildConfiguration(identifier);
  }

  public buildConfiguration(moduleName: string): ConfigurationDefinition {
    return {
      dataForm: this.dataForms[moduleName],
      sections: this.getSections(moduleName),
    };
  }

  public getSections(moduleName: string): SettingSectionDefinition[] {
    const output: SettingSectionDefinition[] = [];
    const sections = this.moduleSections[moduleName];
    for (const sectionName of sections) {
      output.push(this.configurationSection[`${moduleName}.${sectionName}`])
    }
    return output;
  };

  public getSectionalForm(baseForm: string, sectionForm: string): FormGroup {
    return this.dataForms[baseForm]!.get(sectionForm)! as FormGroup;
  }
}
