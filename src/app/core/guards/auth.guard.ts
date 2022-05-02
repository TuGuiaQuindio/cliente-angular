import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreModule } from '../core.module';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: CoreModule
})
export class AuthGuard implements CanActivate {

  constructor(private authSrv: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.authSrv.isLoggedIn()) {
        return this.router.parseUrl("/home");
      }
      return true;
  }
  
}
