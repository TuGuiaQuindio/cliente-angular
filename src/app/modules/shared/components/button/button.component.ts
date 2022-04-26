import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input('type') public type = "default";
  @Input() public buttonType = "";

  constructor() { }

  ngOnInit(): void {
    
  }

}
