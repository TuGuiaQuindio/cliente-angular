import { AfterViewInit, Component, OnInit, Type, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AnchorDirective } from 'src/app/directive/anchor.directive';
import { LinkAccessInfo } from 'src/app/interfaces/link-access-info';
import { PageNotFoundComponent } from 'src/app/modules/page-not-found/page-not-found.component';
import { TitleBarComponent } from 'src/app/modules/shared/title-bar/title-bar.component';
import { ActiveModuleDataFormComponent } from '../active-module-data-form/active-module-data-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  constructor() { }

  public activeModules: any[] = [
    ActiveModuleDataFormComponent,
    ActiveModuleDataFormComponent,
  ];
  public name: string = localStorage.getItem(AuthService.USER_NAME) || 'usuario';
  public get title(): string {
    return `¡Hola ${this.name}!`
  }

  @ViewChild(AnchorDirective, { static: true }) public appAnchor!: AnchorDirective;

  public get rolType(): number {
    return parseInt(localStorage.getItem(AuthService.USER_ROLE) ?? "0");
  }

  public get links(): Observable<LinkAccessInfo[]> {
    const data: LinkAccessInfo[] = [
      { title: "Edita tu perfil", description: "Mantén tus datos tanto personales como profesionales actualizados y en un solo lugar.", buttonLabel: "Editar ahora", icon: "bx-book-bookmark", link: "/settings" },
      { title: "Edita tu perfil", description: "Mantén tus datos tanto personales como profesionales actualizados y en un solo lugar.", buttonLabel: "Editar ahora", icon: "bx-book-bookmark", link: "/settings" },
    ];
    return of(data);
  }

  async ngAfterViewInit(): Promise<void> {
    await new Promise(() => setTimeout(() => this.loadComponents()));
  }

  loadComponents() {
    const viewContainerRef = this.appAnchor.viewContainerRef;
    viewContainerRef.clear();
    
    for (let i = 0; i < this.activeModules.length; i++) {
      const type = this.activeModules[i];
      const componentRef = viewContainerRef.createComponent(type);
    }
  }

}
