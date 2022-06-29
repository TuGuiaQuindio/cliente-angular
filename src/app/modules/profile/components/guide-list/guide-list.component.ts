import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, map, mergeMap, Observable } from 'rxjs';
import { Guide } from 'src/app/core/interfaces/guide';
import { FilterSidebarComponent } from 'src/app/modules/filter/components/filter-sidebar/filter-sidebar.component';
import { GuideDataService } from '../../services/guide-data.service';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.scss']
})
export class GuideListComponent implements OnInit {

  constructor(private dataSrv: GuideDataService) { }
  @ViewChild(FilterSidebarComponent) public set hostFilterSidebar(filterSidebar: FilterSidebarComponent) {
    filterSidebar.stateChange.pipe(
      mergeMap((state) => this.dataSrv.getAllGuides().pipe(
        map((guides) => {
          return guides.filter(guide => {
            console.warn()
            return state &&
              (!state.firstAid || guide.additionalInformation.firstAid) &&
              (!state.hasTransport || guide.additionalInformation.hasTransport) &&
              (!state.verified || guide.verified) &&
              (!state.availability || state.availability == guide.additionalInformation.availability);
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

  public getLink(guide: Guide): string {
    return `${guide.firstName}.${guide.lastName}`.replace(/ /g,'.').toLowerCase();
  }

}
