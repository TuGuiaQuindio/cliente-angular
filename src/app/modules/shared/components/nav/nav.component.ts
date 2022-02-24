import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // Declaramos variable para hacer interpolación
  titulo:String = "TuGuiaQuindio.com";


  constructor() { }

  ngOnInit(): void {
  }

}
