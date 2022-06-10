import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SettingSectionDefinition } from '../../components/panel-builder/panel-builder.component';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  public information = this.fb.group({
    birthdate: ['', [Validators.required]]
  })
  public dataForm = this.fb.group({
    information: this.information,
  })
  public sections: SettingSectionDefinition[] = [
    {
      title: "Datos personales", formGroup: this.information, inputs: [
        { name: "fecha de nacimiento", description: "¿cuál es tu fecha de nacimiento?", formControlName: "birthdate", inputType: "date" },
      ]
    },
  ]

  public onSubmit() {

  }
  ngOnInit(): void {
  }

}
