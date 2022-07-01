import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LinkAccessInfo } from 'src/app/interfaces/link-access-info';
import { DashboardServicesModule } from './dashboard-services.module';

@Injectable({
  providedIn: DashboardServicesModule
})
export class LinkSolverService {

  constructor() { }

  public getLinksByRole(role?: string): Observable<LinkAccessInfo[]> {
    if (!role) return of([])
    const data: LinkAccessInfo[] = [
      { title: "Edita tu perfil", description: "Mantén tus datos tanto personales como profesionales actualizados y en un solo lugar.", buttonLabel: "Editar ahora", icon: "bx-book-bookmark", link: "/settings" },
    ];

    switch (role) {
      case '1': // Guía
        data.push({ title: "Registrar idiomas", icon: "bx-message", link: "/settings/languages", buttonLabel: "Llévame allá", description: "Como guía, es importante que registres toda la información relevante acerca de los lenguajes que manejas." });
        data.push({ title: "Ver vacantes disponibles", icon: "bx-briefcase", link: "/vacancy/available", buttonLabel: "Descubrir más", description: "Ábrete a un mundo de posibilidades por explorar. con TuGuíaQuindío podrás ser parte de una comunidad activa de empleos en tu región" });
        break;
      case '2':
        data.push({ title: "Ver vacantes", icon: "bx-chalkboard", link: "/vacancy", buttonLabel: "Ver mis vacantes", description: "Sabemos que lo más importante para tu negocio, son los resultados. Con TuGuíaQuindío puedes lograr más de lo que puedes imaginar de la mano del talento humano de la región esperando por tí" });
        data.push({ title: "Buscar Guías", icon: "bx-user-pin", link: "/profile/guides", buttonLabel: "Empezar a buscar", description: "Explora un centenar de ofertas dentro de TuGuíaQuindío, encuentra lo que buscas, sin que te cueste más y al alcance de tu mano" });
        break;
    }
    return of(data);

  }
}
