import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  constructor() { }

  @Input() public label = ''; 
  @Input() public type = '';
  @Input() public icon = '';

  @HostBinding('class') public get hostClasses() {
    return this.type;
  }

  ngOnInit(): void {
  }

}
