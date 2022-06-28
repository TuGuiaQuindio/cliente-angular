import { Component, HostBinding, Input, OnInit, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent extends InputValueAccessor implements OnInit {

  @Input() public label = "";
  @Input() public size = "";
  @Input() public color = "";
  @Input() public tabindex = 0;

  @HostBinding('class') public get hostClasses(): string[] {
    return [this.size ?? '', this.color ?? ''];
  }

  constructor(@Optional() @Self() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit(): void {
    this.setup();
  }

}
