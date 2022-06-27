import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-icon',
  templateUrl: './label-icon.component.html',
  styleUrls: ['./label-icon.component.scss']
})
export class LabelIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public label = '';
  @Input() public icon = '';
  @Input() public type = '';

  @HostBinding('class') public get hostClasses(){
    return this.type;
  }

}
