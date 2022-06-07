import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  @HostBinding('attr.data-theme') private theme = 'default';

  ngOnInit(): void {
  }

}
