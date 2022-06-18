import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';

export type SelectOption = { value: any, label: string }
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent extends InputValueAccessor implements OnInit {

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  @Output() public elementSelected = new EventEmitter<SelectOption>();

  @Input() public disabled = false;
  @Input() public options: SelectOption[] = [];
  @Input() public selectedIndex = 0;
  @Input() public label = "";

  public showLabel() {
    return this.label.length != 0;
  }

  ngOnInit(): void {
    this.setup();
  }

  public onInputSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedIndex = target.selectedIndex;
    this.elementSelected.next(this.options[target.selectedIndex]);
  }

  public onSelectedElement(idx: number) {
    this.selectedIndex = idx;
  }

  public isSelected(idx: number) {
    return this.selectedIndex === idx;
  }

}
