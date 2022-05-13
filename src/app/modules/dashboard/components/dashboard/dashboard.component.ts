import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LinkAccessInfo } from 'src/app/interfaces/link-access-info';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  public get links(): Observable<LinkAccessInfo[]> {
    const data: LinkAccessInfo[] = [
      { title: "Edita tu perfil", description: "Mantén tus datos tanto personales como profesionales actualizados y en un solo lugar.", buttonLabel: "Editar ahora", icon: "bx-book-bookmark", link:"/settings" },
      { title: "Edita tu perfil", description: "Mantén tus datos tanto personales como profesionales actualizados y en un solo lugar.", buttonLabel: "Editar ahora", icon: "bx-book-bookmark", link:"/settings" },
    ];
    return of(data);
  }

  ngOnInit(): void {
  }

}
