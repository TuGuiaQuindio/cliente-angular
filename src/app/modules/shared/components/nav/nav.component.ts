import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements AfterViewInit {

  // Declaramos variable para hacer interpolación
  public titulo = "TuGuíaQuindío";
  @Input('hide-nav-btns') public hideNavigationButtons = false;
  @ViewChild(DropdownComponent) public dropdown!: DropdownComponent;

  constructor(private authSrv: AuthService, private router: Router) { }

  public get isLoggedIn() {
    return this.authSrv.isLoggedIn();
  }

  public logout() {
    this.authSrv.logout();
    this.router.navigateByUrl('/home');
  }
  
  public onAvatarClick() {
    if(!this.dropdown) return;
    if (this.dropdown.hidden) {
      this.dropdown.show();
    } else {
      this.dropdown.hide();
    }
  }

  ngAfterViewInit(): void {
    if(this.dropdown) this.dropdown.hide();
  }

}
