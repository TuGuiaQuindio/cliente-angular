import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { USER_ROLE } from 'src/app/constants';
import { SettingSectionDefinition } from '../../components/panel-builder/panel-builder.component';
import { ConfigurationDefinition, ConfigurationSolverService } from '../../services/configuration-solver.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  private configurationSubj = new BehaviorSubject<ConfigurationDefinition>({
    dataForm: new FormGroup({}),
    sections: [],
  });

  public get configurationState$() {
    return this.configurationSubj.asObservable();
  }

  constructor(private fb: FormBuilder, private configurationSolverSrv: ConfigurationSolverService) { }
  ngOnInit(): void {
    const configuration = this.configurationSolverSrv.getSectionConfiguration(localStorage.getItem(USER_ROLE) ?? "1", "security");
    if (!configuration) return;
    const { sections, dataForm } = configuration;
    this.configurationSubj.next({
      sections, dataForm
    })
    this.dataForm = dataForm;
    this.sections = sections;
  }

  public dataForm!: FormGroup;
  public sections!: SettingSectionDefinition[];

  public onSubmit() {
  }
}
