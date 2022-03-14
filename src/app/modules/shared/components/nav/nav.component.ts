import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // Declaramos variable para hacer interpolación
  public titulo = "TuGuiaQuindio";


  constructor() { }

  ngOnInit(): void {
  }

}
