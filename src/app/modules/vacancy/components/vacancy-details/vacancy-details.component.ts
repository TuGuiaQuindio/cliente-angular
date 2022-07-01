import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.scss']
})
export class VacancyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    const { id } = route.snapshot.params;
    console.warn(id);
  }

  ngOnInit(): void {
  }

}
