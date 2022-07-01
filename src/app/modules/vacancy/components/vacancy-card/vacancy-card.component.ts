import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancy-card',
  templateUrl: './vacancy-card.component.html',
  styleUrls: ['./vacancy-card.component.scss']
})
export class VacancyCardComponent implements OnInit {

  constructor() { }
  @Input() public title = "Guías para tour que hablen frances Guías para tour que hablen frances";
  @Input() public description = "Ipsum eaque modi laudantium delectus hic corporis Nostrum eum tempore eos in consequuntur aut Suscipit in quae fugit expedita quaerat rem. Alias saepe soluta blanditiis reiciendis amet Alias quaerat quisquam.";
  @Input() public vacancyCount = 0;
  @Input() public salaryMin = 0;
  @Input() public salaryMax = 0;
  @Input() public availability = "";

  ngOnInit(): void {
  }

}
