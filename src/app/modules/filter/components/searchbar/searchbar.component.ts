import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { filter, fromEvent, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit, OnDestroy {

  constructor() { }
  @ViewChild('searchbar') public set hostSearchbar(value: ElementRef) {
    this.searchbar = value.nativeElement as HTMLInputElement;
    fromEvent(this.searchbar, 'input')
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: () => {
          const value = this.searchbar.value;
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

  clearInput() {
    this.searchbar.value = '';
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.lifecycle.next('destroy');
  }

}
