import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { SelectOption } from 'src/app/modules/shared/components/select/select.component';

export type FilterState = { availability: undefined | 'full' | 'weekends' | 'weekdays', verified: boolean, hasTransport: boolean, firstAid: boolean, search: string };
export type FilterDefinition = { name: string, formControl: FormControl, type: "checkbox" | "select", options?: SelectOption[] };
export type FilterSectionDefinition = { title: string, filters: FilterDefinition[] };
@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private ref: ElementRef) { }
  public filterForm = this.fb.group({
    search: [''],
    availability: [undefined],
    verified: [false],
    hasTransport: [false],
    firstAid: [false],
  })

  @Input() public sections: FilterSectionDefinition[] = [
    {
      title: 'informacion', filters: [
        {
          name: 'disponibilidad', formControl: this.getFormControl('availability'), type: 'select', options: [
            { label: 'Seleccione', value: undefined },
            { label: 'Completa', value: 'full' },
            { label: 'Fines de semana', value: 'weekends' },
            { label: 'Entre semana', value: 'weekdays' },
          ]
        },
        { name: 'verificado', formControl: this.getFormControl('verified'), type: 'checkbox' },
        { name: 'cuenta con transporte particular', formControl: this.getFormControl('hasTransport'), type: 'checkbox' },
        { name: 'sabe primeros auxilios', formControl: this.getFormControl('firstAid'), type: 'checkbox' },
      ]
    }
  ]
  @Output() public stateChange = new EventEmitter<FilterState>();
  @ViewChild('aside') public set hostAside(value: ElementRef) {
    const target = value.nativeElement as HTMLElement;
    const intersectionObservable = new Observable<IntersectionObserverEntry>((subscriber) => {
      const marginValue = "-20px 0px 0px 0px";
      const observer = new IntersectionObserver(
        (e) => subscriber.next(...e),
        { root: this.ref.nativeElement, threshold: 1, rootMargin: marginValue }
      );
      observer.observe(target);
      return () => {
        observer.unobserve(target);
      }
    }).pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (value) => {
          this.showLogo = value.intersectionRatio >= 1;
        }
      })
  }
  public showLogo = false;
  public lifecycle = new Subject<string>();
  public get destroy$() {
    return this.lifecycle
      .pipe(
        filter(state => state == 'destroy')
      );
  }

  ngOnInit(): void {
    this.stateChange.emit({
      search: '',
      firstAid: false,
      verified: false,
      availability: undefined,
      hasTransport: false,
    });
    this.filterForm.valueChanges
    .pipe(takeUntil(this.destroy$))
    .subscribe({
        next: value => {
          this.stateChange.emit(value);
        }
      })
  }

  ngOnDestroy(): void {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

  public getFormControl(name: string): FormControl{
      return this.filterForm.get(name) as FormControl;
  }

}
