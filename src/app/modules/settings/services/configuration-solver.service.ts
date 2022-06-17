import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorMatchDirective } from '../../signup/directives/validator-match.directive';
import { SettingSectionDefinition } from '../components/panel-builder/panel-builder.component';
import { PanelSectionDefinition } from '../components/panel-settings/panel-settings.component';
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
        email: this.fb.control({ value: "", disabled: true }),
        document: this.fb.control({ value: "", disabled: true }),
        phoneNumber: ['', [Validators.pattern(/^(?:\(\+[0-9]{1,3}\)|\+[0-9]{1,3}|.?)\s?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{2,6}[\s-]?[0-9]{2,6}$/)]],
        birthdate: ['']
      }),
      additionalInfo: this.fb.group({
        city: [''],
        hasTransport: [false, Validators.required],
      })
    }),
    "module-information-company": this.fb.group({
      companyData: this.fb.group({
        email: this.fb.control({ value: "", disabled: true }),
        nit: this.fb.control({ value: "", disabled: true }),
        phoneNumber: ['', [Validators.pattern(/^(?:\(\+[0-9]{1,3}\)|\+[0-9]{1,3}|.?)\s?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{2,6}[\s-]?[0-9]{2,6}$/)]]
      }),
      additionalInfo: this.fb.group({
        address: ['', Validators.required],
        mainActivity: ['', [Validators.minLength(8)]],
      })
    }),
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
      title: "Información personal", formGroup: this.getSectionalForm("module-information-guide", "personalData"), inputs: [
        { name: "correo electrónico", description: "dirección de correo electrónico registrada", formControlName: "email", inputType: "email" },
        { name: "documento", description: "documento de identidad del guía", formControlName: "document", inputType: "text" },
        {
          name: "número de teléfono", description: "un número de contacto para que las empresas puedan hablar contigo", formControlName: "phoneNumber", inputType: "tel", example: {
            title: "Los formatos válidos son:",
            examples: [
              "(+57) 123 456 7789",
              "+57 123 4567789",
              "1234567789",
            ]
          }
        },
        { name: "fecha de nacimiento", description: "dinos tu fecha de nacimiento", formControlName: "birthdate", inputType: "date" },
      ]
    },
    "module-information-guide.additionalInfo": {
      title: "Datos adicionales", formGroup: this.getSectionalForm("module-information-guide", "additionalInfo"), inputs: [
        { name: "ciudad", description: "lugar de residencia", formControlName: "city", inputType: "text" },
        { name: "cuento con transporte particular", description: "¿dispone de un vehiculo para el transporte?", formControlName: "hasTransport", inputType: "checkbox" }
      ]
    },
    "module-information-company.companyData": {
      title: "Datos de la empresa", formGroup: this.getSectionalForm("module-information-company", "companyData"), inputs: [
        { name: "correo electrónico", description: "dirección de correo electrónico registrada", formControlName: "email", inputType: "email" },
        { name: "nit", description: "numero de identificación tributaria de la empresa", formControlName: "nit", inputType: "text" },
        {
          name: "número de teléfono", description: "número de contacto para que los guías y contratados puedan comunicarse con tu empresa", formControlName: "phoneNumber", inputType: "tel", example: {
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
    "module-information-company.additionalInfo": {
      title: "Información adicional", formGroup: this.getSectionalForm("module-information-company", "additionalInfo"), inputs: [
        { name: "ubicación de la empresa", description: "centro de operaciones principal de la empresa", inputType: "map", formControlName: "address" },
        { name: "actividad principal", description: "¿a qué se dedica tu empresa?", inputType: "text", formControlName: "mainActivity" }
      ]
    }
  }

  private moduleSections: { [key: string]: string[] } = {
    "module-security": ["passwordChange"],
    "module-information-guide": ["personalData", "additionalInfo"],
    "module-information-company": ["companyData", "additionalInfo"],
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

  private panelSectionsPerRole: { [key: string]: PanelSectionDefinition[] } = {
    "1": [
      {
        title: "Mi perfil", buttons:
          [
            { icon: "bx-user", label: "información personal", url: "/settings/information" },
            { icon: "bx-lock-alt", label: "seguridad", url: "/settings/security" },
            { icon: "bx-chat", label: "idiomas", url: "/settings/languages" },
            { icon: "bx-book-bookmark", label: "mis certificaciones", url: "/settings/certificates" },
          ]
      },
    ],
    "2": [
      {
        title: "Mi perfil", buttons:
          [
            { icon: "bx-user", label: "información personal", url: "/settings/information" },
            { icon: "bx-lock-alt", label: "seguridad", url: "/settings/security" },
            { icon: "bx-book-bookmark", label: "mis vacantes", url: "/settings/vacancies" },
          ]
      },
    ],
  }

  public getPanelSections(role: string) {
    return this.panelSectionsPerRole[role];
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
