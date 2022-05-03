import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // Declaramos variable para hacer interpolación
  public titulo = "TuGuiaQuindio";
  @Input('hide-nav-btns') public hideNavigationButtons = false;

  constructor(private authSrv: AuthService, private router: Router) { }

  public get isLoggedIn() {
    return this.authSrv.isLoggedIn();
  }

  public logout() {
    this.authSrv.logout();
    this.router.navigateByUrl('/home');
  }

  ngOnInit(): void {
  }

}
