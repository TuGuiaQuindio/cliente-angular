import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, map, filter } from 'rxjs';
import { SettingSectionDefinition } from '../../components/panel-builder/panel-builder.component';
import { ConfigurationDefinition } from '../../services/configuration-solver.service';

@Component({
  template: '',
})
export class BaseRouteComponent {

  constructor() { }
  protected configurationSubj = new BehaviorSubject<ConfigurationDefinition>({
    dataForm: new FormGroup({}),
    sections: [],
  });

  public get configurationState$() {
    return this.configurationSubj.asObservable();
  }

  public get sections$(): Observable<SettingSectionDefinition[]> {
    return this.configurationState$.pipe(
      filter((config: ConfigurationDefinition) => !!config && !!config.sections),
      map((config: ConfigurationDefinition) => config.sections)
    );
  }

  public get dataForm$(): Observable<FormGroup> {
    return this.configurationState$.pipe(
      filter((config: ConfigurationDefinition) => !!config && !!config.dataForm),
      map((config: ConfigurationDefinition) => config.dataForm)
    );
  }
}
