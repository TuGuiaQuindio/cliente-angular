import { Component, OnInit, ViewChild } from '@angular/core';
import { VacancyFormComponent } from '../../vacancy-form/vacancy-form.component';

@Component({
  selector: 'app-edit-vacancy-page',
  templateUrl: './edit-vacancy-page.component.html',
  styleUrls: ['./edit-vacancy-page.component.scss']
})
export class EditVacancyPageComponent implements OnInit {

  constructor() { }
  @ViewChild(VacancyFormComponent) public vacancyForm!: VacancyFormComponent;

  ngOnInit(): void {
  }

  public onSubmit() {
    const state = this.vacancyForm.getFormState();
  }

}
