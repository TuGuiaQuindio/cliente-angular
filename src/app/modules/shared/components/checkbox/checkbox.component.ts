import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { WarningMessenger } from 'src/app/interfaces/warning-messenger';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends InputValueAccessor implements OnInit, WarningMessenger {

  @Input() public warningMsg = "";
  @Input() public label = "";
  @Input() public tabindex = 0;

  constructor(@Optional() @Self() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit(): void {
    this.setup();
  }

}
