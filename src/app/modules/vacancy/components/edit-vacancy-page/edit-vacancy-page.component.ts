import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VacancyFormComponent } from '../../vacancy-form/vacancy-form.component';

@Component({
  selector: 'app-edit-vacancy-page',
  templateUrl: './edit-vacancy-page.component.html',
  styleUrls: ['./edit-vacancy-page.component.scss']
})
export class EditVacancyPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
    const { id } = route.snapshot.params;
    console.warn(id);
    if (!id){
      this.router.navigateByUrl('/vacancy');
      return;
    }
  }
  @ViewChild(VacancyFormComponent) public vacancyForm!: VacancyFormComponent;

  ngOnInit(): void {
  }

  public onSubmit() {
    const state = this.vacancyForm.getFormState();
  }

}
