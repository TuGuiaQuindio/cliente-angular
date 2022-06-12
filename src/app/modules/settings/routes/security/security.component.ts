import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { USER_ROLE } from 'src/app/constants';
import { SettingSectionDefinition } from '../../components/panel-builder/panel-builder.component';
import { ConfigurationSolverService } from '../../services/configuration-solver.service';
import { BaseRouteComponent } from '../base-route/base-route.component';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent extends BaseRouteComponent implements OnInit {

  constructor(private configurationSolverSrv: ConfigurationSolverService) {
    super();
  }
  ngOnInit(): void {
    const configuration = this.configurationSolverSrv.getSectionConfiguration(localStorage.getItem(USER_ROLE) ?? "1", "security");
    if (!configuration) return;
    const { sections, dataForm } = configuration;
    this.configurationSubj.next({
      sections, dataForm
    })
    this.dataForm = dataForm;
  }

  public dataForm!: FormGroup;

  public onSubmit() {
  }
}
