import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Optional, Output, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { filter, fromEvent, Subject, takeUntil } from 'rxjs';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent extends InputValueAccessor implements OnInit, OnDestroy {

  constructor(@Self() @Optional() ngControl: NgControl) {
    super(ngControl);
  }
  @ViewChild('searchbar') public set hostSearchbar(value: ElementRef) {
    this.searchbar = value.nativeElement as HTMLInputElement;
    fromEvent(this.searchbar, 'input')
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: () => {
          const value = this.searchbar.value;
          this.searchValue = value;
          this.valueChange.emit(value);
        },
      })
  }

  @Output() public valueChange = new EventEmitter<string>();
  public searchbar!: HTMLInputElement;
  public lifecycle = new Subject<string>();
  public get destroy$() {
    return this.lifecycle.asObservable()
      .pipe(
        filter(state => state == 'destroy')
      );
  }

  public searchValue = "";

  clearInput() {
    this.searchbar.value = '';
  }

  ngOnInit(): void {
    this.setup();
  }

  ngOnDestroy(): void {
    this.lifecycle.next('destroy');
  }

}
