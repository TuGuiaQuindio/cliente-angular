import { Component, OnInit } from '@angular/core';
import { BaseRouteComponent } from '../base-route/base-route.component';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent extends BaseRouteComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
