import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { handleFormErrors, WarningMessengerDict } from 'src/app/helpers/form-helper';
import { SettingInputExample } from '../../settings/components/panel-builder/panel-builder.component';
import { SelectOption } from '../../shared/components/select/select.component';

export type FormState = { value: any, valid: boolean }
@Component({
  selector: 'app-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.scss']
})
export class VacancyFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  @ViewChildren(InputValueAccessor) public set hostInputValues(value: QueryList<InputValueAccessor>) {
    value.forEach(el => {
      const { name } = el.ngControl;
      if (!name) return;
      this.warningMessengerDict[name] = el;
    })
  }

  public numberExample: SettingInputExample = {
    title: "Este campo solo debe contener números",
    examples: []
  }

  public warningMessengerDict: WarningMessengerDict = {}

  public availabilityOptions: SelectOption[] = [
    { label: 'Seleccione', value: undefined },
    { label: 'Completa', value: 'full' },
    { label: 'Entre semana', value: 'weekdays' },
    { label: 'Fines de semana', value: 'weekends' }
  ];

  public basicInformation = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(6)]],
    description: [''],
    personnel: [1, [Validators.min(1), Validators.max(20)]]
  })

  public payment = this.fb.group({
    minSalary: [0, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0), Validators.max(999999999)]],
    maxSalary: [0, [Validators.required, Validators.pattern(/^\d+$/), Validators.min(0), Validators.max(999999999)]],
  })

  public additionalInfo = this.fb.group({
    availability: [undefined, [Validators.required]],
    hasTransport: [false, [Validators.required]],
    firstAid: [false, [Validators.required]]
  })

  public requiredLanguages = this.fb.group({
    languages: [[]]
  })

  public form = this.fb.group({
    basicInformation: this.basicInformation,
    payment: this.payment,
    additionalInfo: this.additionalInfo,
    requiredLanguages: this.requiredLanguages
  })

  ngOnInit(): void {
  }

  public validateForm() {
    handleFormErrors(this.basicInformation, this.warningMessengerDict);
    handleFormErrors(this.payment, this.warningMessengerDict);
    handleFormErrors(this.additionalInfo, this.warningMessengerDict);
    handleFormErrors(this.requiredLanguages, this.warningMessengerDict);
  }

  public getFormState(): FormState {
    this.validateForm();
    return { value: this.form.value, valid: this.form.valid };
  }
}
