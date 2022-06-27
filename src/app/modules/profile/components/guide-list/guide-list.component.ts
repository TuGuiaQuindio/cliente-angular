import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Guide } from 'src/app/core/interfaces/guide';
import { GuideDataService } from '../../services/guide-data.service';

@Component({
  selector: 'app-guide-list',
  templateUrl: './guide-list.component.html',
  styleUrls: ['./guide-list.component.scss']
})
export class GuideListComponent implements OnInit {

  constructor(private dataSrv: GuideDataService) { }

  public get guides$(): Observable<Guide[]> {
    return this.dataSrv.getAllGuides();
  }

  public getFullName(guide: Guide): string {
    return `${guide.firstName} ${guide.lastName}`;
  }

  ngOnInit(): void {
    this.dataSrv.getAllGuides().subscribe({
      next: (guides) => {
        console.warn(guides);
      }
    })
  }

}
