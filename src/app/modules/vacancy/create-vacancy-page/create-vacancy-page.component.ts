import { Component, OnInit, ViewChild } from '@angular/core';
import { VacancyFormComponent } from '../vacancy-form/vacancy-form.component';

@Component({
  selector: 'app-create-vacancy-page',
  templateUrl: './create-vacancy-page.component.html',
  styleUrls: ['./create-vacancy-page.component.scss']
})
export class CreateVacancyPageComponent implements OnInit {

  constructor() { }
  @ViewChild(VacancyFormComponent) public vacancyForm!: VacancyFormComponent;

  ngOnInit(): void {
  }

  public onSubmit() {
    const state = this.vacancyForm.getFormState();
    console.warn(state);
  }

}
