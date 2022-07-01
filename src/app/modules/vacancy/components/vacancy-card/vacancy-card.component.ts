import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancy-card',
  templateUrl: './vacancy-card.component.html',
  styleUrls: ['./vacancy-card.component.scss']
})
export class VacancyCardComponent implements OnInit {

  constructor() { }
  @Input() public title = "";
  @Input() public description = "";
  @Input() public vacancyCount = 0;
  @Input() public salaryMin = 0;
  @Input() public salaryMax = 0;
  @Input() public availability = "";

  ngOnInit(): void {
  }

}
