import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Se declara variable para la interpolacion
  txtTargetas:String = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi id, facilis nisi deserunt veritatis officiis, quaerat ipsum, fugit repellendus laboriosam";

  ///////////////////////////////////////////////

  constructor() { }

  ngOnInit(): void {
  }

}
