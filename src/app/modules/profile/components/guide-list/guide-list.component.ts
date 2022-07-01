import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, filter, map, mergeMap, Observable, Subject, takeUntil } from 'rxjs';
import { Guide } from 'src/app/core/interfaces/guide';
import { FilterSidebarComponent } from 'src/app/modules/filter/components/filter-sidebar/filter-sidebar.component';
import { GuideDataService } from '../../services/guide-data.service';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.scss']
})
export class GuideListComponent implements OnInit, OnDestroy {

  constructor(private dataSrv: GuideDataService) { }
  @ViewChild(FilterSidebarComponent) public set hostFilterSidebar(filterSidebar: FilterSidebarComponent) {
    filterSidebar.stateChange.pipe(
      takeUntil(this.destroy$),
      mergeMap((state) => this.dataSrv.getAllGuides().pipe(
        map((guides) => {
          return guides.filter(guide => {
            const { search, firstAid, hasTransport, verified, availability } = state;
            const searchRegex = new RegExp(search, 'i');
            return state &&
              (!search || guide.firstName.match(searchRegex) || guide.lastName.match(searchRegex) || guide.aboutMe?.match(searchRegex)) &&
              (!firstAid || guide.additionalInformation.firstAid) &&
              (!hasTransport || guide.additionalInformation.hasTransport) &&
              (!verified || guide.verified) &&
              ((!availability || (availability as any) == 'undefined') || availability == guide.additionalInformation.availability);
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
  private guidesSubj = new BehaviorSubject<Guide[]>([]);
  private lifecycle = new Subject<string>();

  private get destroy$() {
    return this.lifecycle.asObservable()
      .pipe(
        filter(state => state == 'destroy')
      );
  }

  public get guides$(): Observable<Guide[]> {
    return this.guidesSubj.asObservable();
  }

  public getFullName(guide: Guide): string {
    return `${guide.firstName} ${guide.lastName}`;
  }

  ngOnInit(): void {
    this.dataSrv.getAllGuides().subscribe({
      next: guides => {
        this.guidesSubj.next(guides);
      }
    })
  }

  ngOnDestroy() {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

}
