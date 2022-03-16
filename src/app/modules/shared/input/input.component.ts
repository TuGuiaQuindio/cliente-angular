import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  @Input() public label = "Default";
  @Input() public type = "text";

  public warningMsg = "";

  ngOnInit(): void {
  }

  public get showWarning() {
    return this.warningMsg.length != 0;
  }

}
