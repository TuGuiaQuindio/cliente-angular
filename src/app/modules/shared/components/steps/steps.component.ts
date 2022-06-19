import { Component, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, OnInit, Optional, Output, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, fromEvent, Subject, takeUntil } from 'rxjs';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';

export type Position = { x: number, y: number }
@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent extends InputValueAccessor implements OnInit, OnDestroy {

  constructor(@Self() @Optional() ngControl: NgControl, private ref: ElementRef) {
    super(ngControl);
    if (ngControl) ngControl.control!.setValue(0);
    fromEvent(document, 'mouseup')
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: () => {
          this.mouseIsDown = false;
          this.unsetScale();
        }
      });
    fromEvent<MouseEvent>(document, 'mousemove')
      .pipe(
        takeUntil(this.destroy$),
        filter(() => this.mouseIsDown)
      ).subscribe({
        next: (e: MouseEvent) => {
          this.handleMove(e);
        }
      })
    this.updateCircleColor(this.selectIndex);
  }

  @Input() public steps = 2;
  @Output() public indexSelected = new EventEmitter<number>();

  public lifecycle = new Subject<string>();
  public get destroy$() {
    return this.lifecycle
      .pipe(
        filter(state => state === 'destroy')
      );
  }

  @HostListener('click', ['$event']) public onClick(e: MouseEvent) {
    this.handleMove(e)
  }

  @ViewChild('circle') public set hostCircle(value: ElementRef) {
    this.circle = value.nativeElement;
    fromEvent(this.circle, 'mousedown')
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (e: Event) => {
          this.mouseIsDown = true;
          this.setScale(this.MOUSEDOWN_SCALE);
          this.handleMove(e as MouseEvent);
        }
      })
  }

  private readonly MOUSEDOWN_SCALE = 1.35;
  private selectIndex = 0;
  private circle!: HTMLElement;
  private mouseIsDown = false;
  private colorLevels: string[] = [
    "high"
  ]
  @HostBinding('class') public classes: string[] = [this.colorLevels[0]];

  private clamp(value: number, min: number, max: number): number {
    return value < min
      ? min
      : value > max
        ? max
        : value;
  }

  private updateCircleColor(index: number) {
    const level = index / this.steps;
    const fractions = 1 / this.steps;
    const colorIndex = Math.round(Math.floor((level + fractions) * (this.colorLevels.length - 1) * 10) / 10);
    if (colorIndex < 0 || colorIndex > this.colorLevels.length) return;
    const color = this.colorLevels[colorIndex];
    this.classes = [color];
  }

  private unsetScale() {
    const parts = this.circle.style.transform.split(' ');
    if (parts.length < 1) return;
    const transform = parts[0];
    this.circle.style.transform = transform;
  }

  private setScale(factor: number) {
    let transform = this.circle.style.transform;
    const parts = transform.split(' ').length;
    if (parts > 1) return;
    transform += `scale(${factor})`
    this.circle.style.transform = transform;
  }

  private getPixels(position: number, size: number, parts: number): number {
    const fraction = 1 / (parts - 1);
    const fixPortion = Math.floor((position + 1 / (parts * 2)) / fraction);
    const fractionAmount = fixPortion * fraction;
    const pixels = fractionAmount * size;
    return pixels;
  }

  private calculateTrueWidth(): number {
    const target = this.ref.nativeElement as HTMLElement;
    if (!target) return 0;
    const rect = target.getBoundingClientRect();
    let circleWidth = this.circle.getBoundingClientRect().width;
    circleWidth = circleWidth - (circleWidth * Math.abs(this.MOUSEDOWN_SCALE - 1));
    const trueWidth = rect.width - circleWidth;
    return trueWidth
  }

  private getXPosition(e: MouseEvent) {
    const target = this.ref.nativeElement as HTMLElement;
    if (!target) return 0;
    const rect = target.getBoundingClientRect();
    return (e.clientX - rect.left) / rect.width
  }

  private handleIndexSelect(selectIndex: number) {
    if (this.selectIndex === selectIndex) return;
    this.selectIndex = selectIndex;
    this.indexSelected.next(selectIndex);
    if (this.ngControl) this.ngControl.control!.setValue(this.selectIndex);

  }

  private handleVisuals(pixels: number, selectIndex: number) {
    this.circle.style.transform = `translateX(${pixels}px)`;
    this.setScale(this.MOUSEDOWN_SCALE);
    this.updateCircleColor(selectIndex);
  }

  private handleMove(e: MouseEvent) {
    const trueWidth = this.calculateTrueWidth();
    const x = this.clamp(this.getXPosition(e), 0, 1);

    const pixels = this.getPixels(x, trueWidth, this.steps);
    const selectIndex = this.getIndex(pixels, trueWidth, this.steps);

    this.handleIndexSelect(selectIndex);
    this.handleVisuals(pixels, selectIndex);
  }

  public setSelected(idx: number) {
    if (idx < 0 || idx >= this.steps) return;
    const x = idx / this.steps;
    const pixels = this.getPixels(x, this.calculateTrueWidth(), this.steps);
    this.handleIndexSelect(idx);
    this.handleVisuals(pixels, idx);
  }

  private getIndex(pixels: number, width: number, parts: number) {
    let pixelFraction = (pixels / width);
    let selectIndex = Math.floor((pixelFraction - Number.EPSILON) * parts);
    selectIndex = selectIndex < 0 ? 0 : selectIndex;
    return selectIndex;
  }

  ngOnInit(): void {
    this.setup();
  }

  ngOnDestroy(): void {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }
}
