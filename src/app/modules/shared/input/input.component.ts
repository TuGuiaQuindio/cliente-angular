import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }


  @Input() public label = "Default";
  @Input() public type = "text";
  @Input() public warningMsg = "";

  ngOnInit(): void {
  }

  @HostBinding('class.warning') 
  public get showWarning() {
    return this.warningMsg.length != 0;
  }

}
