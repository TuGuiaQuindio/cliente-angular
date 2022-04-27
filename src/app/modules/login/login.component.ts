import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlDefinition } from 'src/app/interfaces/form-control-definition';
import { getFirstControlError } from 'src/app/helpers/form-helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public controlDefinitions: FormControlDefinition[] = [
    { label: "Correo Electrónico", type: "email", formControlName: "email", currentError: "" },
    { label: "Contraseña", type: "password", formControlName: "password", currentError: "" },
  ]

  public form: FormGroup = this.fb.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: ['', Validators.compose([Validators.required])],
  });

  ngOnInit(): void {
  }

  public onFormSubmit() {
    this.controlDefinitions.map(definition => {
      const control = this.form.get(definition.formControlName);
      if (!control) return definition;
      definition.currentError = getFirstControlError(control);
      return definition
    });
  }

}
