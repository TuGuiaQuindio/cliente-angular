import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() { }
  @HostBinding('attr.data-theme') private theme = 'default';

  ngOnInit(): void {
  }

}
