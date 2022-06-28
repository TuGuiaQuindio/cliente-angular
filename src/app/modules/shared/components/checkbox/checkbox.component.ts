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
    const classList: string[] = [];
    if (this.color) classList.push(this.color);
    if (this.size) classList.push(this.size);
    return classList;
  }

  constructor(@Optional() @Self() ngControl: NgControl) {
    super(ngControl);
  }

  ngOnInit(): void {
    this.setup();
  }

}
