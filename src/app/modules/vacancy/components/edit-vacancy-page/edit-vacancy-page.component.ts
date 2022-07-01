import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormInjectorService } from 'src/app/core/services/form-injector.service';
import { VacancyDataService } from '../../services/vacancy-data.service';
import { VacancyFormComponent } from '../../vacancy-form/vacancy-form.component';
import Toastify from 'toastify-js';

@Component({
  selector: 'app-edit-vacancy-page',
  templateUrl: './edit-vacancy-page.component.html',
  styleUrls: ['./edit-vacancy-page.component.scss']
})
export class EditVacancyPageComponent implements AfterViewInit {

  constructor(private route: ActivatedRoute, private router: Router, private vacancySrv: VacancyDataService, private formInject: FormInjectorService) {
    const { id } = route.snapshot.params;
    console.warn(id);
    if (!id) {
      this.router.navigateByUrl('/vacancy');
      return;
    }
    this.vacancyId = id;
  }
  public vacancyId = "";
  @ViewChild(VacancyFormComponent) public vacancyForm!: VacancyFormComponent;

  ngAfterViewInit(): void {
    this.vacancySrv.getVacancyById(this.vacancyId).subscribe({
      next: (vacancy) => {
        if (!vacancy) {
          Toastify({
            text: `No se encontro la vacante ${this.vacancyId}`,
          }).showToast();
          this.router.navigateByUrl('/vacancy');
          return;
        }
        const { title, id, languages, salaryMax, salaryMin, availability, vacancyCount, description } = vacancy;
        setTimeout(() => {
          this.formInject.start(this.vacancyForm.form).inject({
            title: title,
            description,
            personnel: vacancyCount,
            minSalary: salaryMin,
            maxSalary: salaryMax,
            availability: availability,
            languages
          })
        })
      }
    });
  }

  public onSubmit() {
    const state = this.vacancyForm.getFormState();
  }

}
