import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-enterprise-card',
  templateUrl: './enterprise-card.component.html',
  styleUrls: ['./enterprise-card.component.scss']
})
export class EnterpriseCardComponent implements OnInit {

  constructor() { }
  @Input() public title = "";
  @Input() public description = "";
  @Input() public nit = "";
  @Input() public tel = "";
  @Input() public email = "";

  ngOnInit(): void {
  }

}
