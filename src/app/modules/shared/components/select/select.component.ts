import { Component, ElementRef, EventEmitter, HostBinding, Input, OnInit, Optional, Output, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';

export type SelectOption = { value: any, label: string }
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [{ provide: InputValueAccessor, useExisting: SelectComponent }]
})
export class SelectComponent extends InputValueAccessor implements OnInit {

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }

  @Output() public elementSelected = new EventEmitter<SelectOption>();
  @Output() public indexSelected = new EventEmitter<number>();

  @Input() public color = "";
  @Input() public size = "";
  @Input() public disabled = false;
  @Input() public options: SelectOption[] = [];
  @Input() public selectedIndex = 0;
  @Input() public label = "";
  @HostBinding('class') public get hostClasses() {
    const classList: string[] = [];
    if (this.color) classList.push(this.color);
    if (this.size) classList.push(this.size);
    return classList;
  }
  @ViewChild('select') public set hostSelect(ref: ElementRef) {
    this.select = ref.nativeElement;
    this.select.selectedIndex = this.selectedIndex;
    this.syncSelectUI();
  };

  private select!: HTMLSelectElement;

  public syncSelectUI() {
    if (!this.ngControl) return;
    const value = this.control.value;
    const optionIdx = this.options.findIndex(el => el.value === value);
    this.select.selectedIndex = optionIdx == -1 ? 0 : optionIdx;
  }

  public showLabel() {
    return this.label.length != 0;
  }

  ngOnInit(): void {
    this.setup();
  }

  public onInputSelected(event: Event) {
    const target = event.target as HTMLSelectElement;
    console.warn(target.selectedIndex)
    this.elementSelected.next(this.options[target.selectedIndex]);
    this.indexSelected.emit(target.selectedIndex);
  }
}
