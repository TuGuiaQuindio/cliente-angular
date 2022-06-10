import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidatorMatchDirective } from 'src/app/modules/signup/directives/validator-match.directive';
import { SettingSectionDefinition } from '../../components/panel-builder/panel-builder.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent {

  constructor(private fb: FormBuilder) {}
  public passwordChange = this.fb.group({
    password: ['', Validators.required],
    newPassword: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  }, { validators: [ValidatorMatchDirective.matchWith('newPassword', 'confirmPassword')] })

  public dataForm = this.fb.group({
    passwordChange: this.passwordChange
  });

  public sections: SettingSectionDefinition[] = [
    {
      title: "Cambio de contraseña", formGroup: this.passwordChange, inputs: [
        { name: "contraseña", description: "¿cuál es tu contraseña actual?", formControlName: "password", inputType: "password" },
        { name: "nueva contraseña", description: "escribe tu nueva contraseña aquí", formControlName: "newPassword", inputType: "password" },
        { name: "confirmar contraseña", description: "confirma tu nueva contraseña para estar seguros", formControlName: "confirmPassword", inputType: "password" },
      ]
    },
  ]

  public onSubmit() {
  }
}
