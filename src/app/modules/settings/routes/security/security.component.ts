import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export type SettingSectionDefinition = { title: string, inputs: SettingInputDefinition[], formGroup: FormGroup }
export type SettingInputDefinition = { name: string, description: string, formControlName: string, inputType: string }
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent {

  constructor(private fb: FormBuilder) { }
  public passwordChange = this.fb.group({
    password: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  })

  public sections: SettingSectionDefinition[] = [
    {
      title: "Cambio de contraseña", formGroup: this.passwordChange, inputs: [
        { name: "contraseña", description: "¿cuál es tu contraseña actual?", formControlName: "password", inputType: "password" },
        { name: "nueva contraseña", description: "escribe tu nueva contraseña aquí", formControlName: "password", inputType: "password" },
        { name: "confirmar contraseña", description: "confirma tu nueva contraseña para estar seguros", formControlName: "password", inputType: "password" },
      ]
    },
  ]

}
