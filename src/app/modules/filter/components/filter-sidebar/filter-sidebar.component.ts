import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { filter, Observable, Subject, Subscriber, takeUntil } from 'rxjs';
import { SelectOption } from 'src/app/modules/shared/components/select/select.component';

export type FilterDefinition = { name: string, type: "checkbox" | "select", options?: SelectOption[] };
export type FilterSectionDefinition = { title: string, filters: FilterDefinition[] };
@Component({
  selector: 'app-filter-sidebar',
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder, private ref: ElementRef) { }
  @Input() public sections: FilterSectionDefinition[] = [
    {
      title: 'informacion', filters: [
        {
          name: 'disponibilidad', type: 'select', options: [
            { label: 'Seleccione', value: undefined },
            { label: 'Completa', value: 'full' },
            { label: 'Fines de semana', value: 'weekends' },
            { label: 'Entre semana', value: 'weekdays' },
          ]
        },
        { name: 'verificado', type: 'checkbox' },
        { name: 'cuenta con transporte particular', type: 'checkbox' },
        { name: 'sabe primeros auxilios', type: 'checkbox' },
      ]
    }
  ]

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
  }

  ngOnDestroy(): void {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

}
