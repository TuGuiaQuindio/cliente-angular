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
  }

  private moduleSections: { [key: string]: string[] } = {
    "module-security": ["passwordChange"]
  }

  private rolePerSection: { [key: string]: { [key: string]: string } } = {
    "security": {
      "1": "module-security",
      "2": "module-security"
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
