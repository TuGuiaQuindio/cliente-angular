import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { USER_ROLE } from 'src/app/constants';
import { SettingSectionDefinition } from '../../components/panel-builder/panel-builder.component';
import { ConfigurationSolverService } from '../../services/configuration-solver.service';
import { BaseRouteComponent } from '../base-route/base-route.component';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent extends BaseRouteComponent implements OnInit {

  constructor(private configurationSolver: ConfigurationSolverService) {
    super();
  }

  ngOnInit(): void {
    const configuration = this.configurationSolver.getSectionConfiguration(localStorage.getItem(USER_ROLE)!, "information");
    if (!configuration) return;
    const { sections, dataForm } = configuration;
    this.dataForm = dataForm;
    this.configurationSubj.next({ sections, dataForm })
  }
  public dataForm!: FormGroup;

  public onSubmit() {

  }

}
