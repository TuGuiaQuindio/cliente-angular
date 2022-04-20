import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // Declaramos variable para hacer interpolación
  public titulo = "TuGuiaQuindio";
  @Input('hide-nav-btns') public hideNavigationButtons = false;

  constructor() { }

  ngOnInit(): void {
  }

}
