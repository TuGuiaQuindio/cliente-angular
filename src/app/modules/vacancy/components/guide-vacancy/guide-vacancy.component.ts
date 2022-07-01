import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap, filter, map, takeUntil, BehaviorSubject, Subject, Observable } from 'rxjs';
import { Vacancy } from 'src/app/interfaces/vacancy';
import { FilterSectionDefinition, FilterSidebarComponent } from 'src/app/modules/filter/components/filter-sidebar/filter-sidebar.component';
import { VacancyDataService } from '../../services/vacancy-data.service';

@Component({
  selector: 'app-guide-vacancy',
  templateUrl: './guide-vacancy.component.html',
  styleUrls: ['./guide-vacancy.component.scss']
})
export class GuideVacancyComponent implements OnInit {

  constructor(private dataSrv: VacancyDataService, private router: Router) { }
  @ViewChild(FilterSidebarComponent) public set hostFilterSidebar(filterSidebar: FilterSidebarComponent) {
    filterSidebar.stateChange.pipe(
      takeUntil(this.destroy$),
      mergeMap((state) => this.dataSrv.getVacancies(100).pipe(
        map((vacancies) => {
          return vacancies.filter(vacancy => {
            const { search, availability, hasTransport, firstAid } = state;
            const regexSearch = new RegExp(search, 'i');
            return !!state &&
              (!search || vacancy.title.match(regexSearch) || vacancy.description?.match(regexSearch) || vacancy.salaryMax.toString().match(regexSearch) || vacancy.salaryMin.toString().match(regexSearch)) &&
              ((!availability || (availability as any) == 'undefined') || vacancy.availability == availability) &&
              (!hasTransport || vacancy.hasTransport) &&
              (!firstAid || vacancy.firstAid);

          }
          )
        }),
      ))
    ).subscribe({
      next: (guides) => {
        this.guidesSubj.next(guides);
      }
    });
  }
  private guidesSubj = new BehaviorSubject<Vacancy[]>([]);
  private lifecycle = new Subject<string>();
  public sections: FilterSectionDefinition[] = [
    {
      title: 'informacion', filters: [
        {
          name: 'disponibilidad', toResolveFormControlName: 'availability', type: 'select', options: [
            { label: 'Seleccione', value: undefined },
            { label: 'Completa', value: 'full' },
            { label: 'Fines de semana', value: 'weekends' },
            { label: 'Entre semana', value: 'weekdays' },
          ]
        },
        { name: 'cuenta con transporte particular', toResolveFormControlName: 'hasTransport', type: 'checkbox' },
        { name: 'sabe primeros auxilios', toResolveFormControlName: 'firstAid', type: 'checkbox' },
      ]
    }
  ]
  private get destroy$() {
    return this.lifecycle.asObservable()
      .pipe(
        filter(state => state == 'destroy')
      );
  }

  public get vacancies$(): Observable<Vacancy[]> {
    return this.guidesSubj.asObservable();
  }

  ngOnInit(): void {
    this.dataSrv.getVacancies(100).subscribe({
      next: guides => {
        this.guidesSubj.next(guides);
      }
    })
  }

  ngOnDestroy() {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

  public onButtonClick(vacancyId: string, actionType: string) {
    switch (actionType) {
      case 'view':
        this.router.navigate(['/vacancy/view/', vacancyId]);
        break;
    }
  }

}
