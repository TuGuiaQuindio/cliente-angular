import { CurrencyPipe } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss'],
  providers: [CurrencyPipe]
})
export class InputCurrencyComponent extends InputValueAccessor implements OnInit {

  constructor(@Self() @Optional() ngControl: NgControl, private currency: CurrencyPipe) {
    super(ngControl);
  }
  @Input() public label = "";
  @Input() public placeholder = "";
  @Input() public tabindex = 0;
  @Input() public step = 10000;
  @Input() public hideLabel = false;

  @ViewChild('input') public set hostInput(value: ElementRef) {
    if (!value) return;
    this.inputEl = value.nativeElement as HTMLInputElement;
  }

  public currencyText = this.toCurrency('0');
  public editting = false;
  public visible = false;
  private inputEl!: HTMLInputElement;

  ngOnInit(): void {
    this.setup();
  }

  public showLabel(): boolean {
    return !this.hideLabel && this.label.length > 0;
  }

  private toCurrency(value: string): string {
    return this.currency.transform(value, '$', 'symbol', '0.0-0')?.replace(/,/g, '.') ?? value;
  }

  public onInputBlur(e: FocusEvent) {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    if (isNaN(Number.parseFloat(value))) return;
    this.currencyText = this.toCurrency(value);
    this.editting = false;
  }

  public forceUpdateCurrencyText(value: number | string) {
    this.currencyText = this.toCurrency(value.toString());
  }

  public onDisplayFocus() {
    this.editting = true;
    setTimeout(() => {
      this.inputEl.focus();
      this.inputEl.select();
    }, 1);
  }

  public setFocus() {
    this.inputEl.focus();
  }

}
