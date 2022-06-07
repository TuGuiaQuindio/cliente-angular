import { AfterViewInit, Component, HostBinding, ViewChild } from '@angular/core';
import { Observable, of, filter, mergeMap, tap, delay, map } from 'rxjs';
import { USER_NAME, USER_ROLE } from 'src/app/constants';
import { AuthService } from 'src/app/core/services/auth.service';
import { AnchorDirective } from 'src/app/directive/anchor.directive';
import { LinkAccessInfo } from 'src/app/interfaces/link-access-info';
import { ModuleSolverService } from '../../services/module-solver.service';
import { ActiveModuleDataFormComponent } from '../active-module-data-form/active-module-data-form.component';
import { CompanyExtraFormComponent } from '../company-extra-form/company-extra-form.component';
import { GuideExtraFormComponent } from '../guide-extra-form/guide-extra-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  constructor(private moduleSolverSrv: ModuleSolverService) {
  }

  ngAfterViewInit() {
    setTimeout(() => this.loadComponents());
  }

  public activeModules: any[] = [
    this.moduleSolverSrv.getActiveModule()
  ];
  public name: string = localStorage.getItem(USER_NAME) || 'usuario';
  public get title(): string {
    return `¡Hola ${this.name}!`
  }

  @ViewChild(AnchorDirective, { static: true }) public appAnchor!: AnchorDirective;

  public get rolType(): number {
    return parseInt(localStorage.getItem(USER_ROLE) ?? "0");
  }

  public get links(): Observable<LinkAccessInfo[]> {
    const data: LinkAccessInfo[] = [
      { title: "Edita tu perfil", description: "Mantén tus datos tanto personales como profesionales actualizados y en un solo lugar.", buttonLabel: "Editar ahora", icon: "bx-book-bookmark", link: "/settings" },
      { title: "Edita tu perfil", description: "Mantén tus datos tanto personales como profesionales actualizados y en un solo lugar.", buttonLabel: "Editar ahora", icon: "bx-book-bookmark", link: "/settings" },
    ];
    return of(data);
  }

  public loadComponents() {
    const viewContainerRef = this.appAnchor.viewContainerRef;
    viewContainerRef.clear();
    for (let i = 0; i < this.activeModules.length; i++) {
      const type = this.activeModules[i];
      const componentRef = viewContainerRef.createComponent(ActiveModuleDataFormComponent);
      const instance = componentRef.instance as ActiveModuleDataFormComponent;
      instance.lifecycle$.pipe(
        filter(state => state === "afterViewInit"),
        delay(0),
        mergeMap(() => instance.loadActiveForm(type).pipe(
          mergeMap(component => component.slidesLoad.pipe(
            delay(0),
            tap(() => instance.setupActiveForm(component)),
            map(() => component)
          )))),
        delay(0),
      ).subscribe({
        next: () => {
          instance.updateControlsState();
          instance.updateGlobalState();
        }
      });
    }
  }
}
