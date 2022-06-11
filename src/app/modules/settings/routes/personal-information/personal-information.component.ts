import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USER_ROLE } from 'src/app/constants';
import { SettingSectionDefinition } from '../../components/panel-builder/panel-builder.component';
import { ConfigurationSolverService } from '../../services/configuration-solver.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {

  constructor(private configurationSolver: ConfigurationSolverService) { }
  ngOnInit(): void {
    const configuration = this.configurationSolver.getSectionConfiguration(localStorage.getItem(USER_ROLE) ?? "1", "information");
    if (!configuration) return;
    this.sections = configuration.sections;
    this.dataForm = configuration.dataForm;
  }
  public dataForm!: FormGroup;
  public sections!: SettingSectionDefinition[];

  public onSubmit() {

  }

}
