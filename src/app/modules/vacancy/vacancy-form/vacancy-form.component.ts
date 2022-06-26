import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { auditTime, filter, mergeMap, scan, Subject, take, takeUntil } from 'rxjs';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { handleFormErrors, WarningMessengerDict } from 'src/app/helpers/form-helper';
import { SettingInputExample } from '../../settings/components/panel-builder/panel-builder.component';
import { SettingsInputComponent } from '../../settings/components/settings-input/settings-input.component';
import { SelectOption } from '../../shared/components/select/select.component';
import { InputCurrencyComponent } from '../../shared/input-currency/input-currency.component';

export type FormState = { value: any, valid: boolean }
@Component({
  selector: 'app-vacancy-form',
  templateUrl: './vacancy-form.component.html',
  styleUrls: ['./vacancy-form.component.scss']
})
export class VacancyFormComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) { }
  public lifecycle = new Subject<string>();
  @ViewChildren(InputValueAccessor) public set hostInputValues(value: QueryList<InputValueAccessor>) {
    value.forEach(el => {
      const { name } = el.ngControl;
      if (!name) return;
      this.warningMessengerDict[name] = el;
    })
  }
  @ViewChildren(SettingsInputComponent) public set hostInputs(value: QueryList<SettingsInputComponent>) {
    value.forEach(el => {
      const { formControlName } = el;
      this.settingInputs[formControlName] = el;
    })
  }

  public numberExample: SettingInputExample = {
    title: "Este campo solo debe contener números",
    examples: []
  }

  public warningMessengerDict: WarningMessengerDict = {}
  public settingInputs: { [key: string]: SettingsInputComponent } = {};

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

  public get destroy$() {
    return this.lifecycle.pipe(
      filter(state => state === 'destroy')
    );
  }

  ngOnInit(): void {
    this.payment.get('minSalary')!.valueChanges
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(
        {
          next: (value) => {
            this.validateMinSalary(value);
          }
        }
      )
    this.payment.get('maxSalary')!.valueChanges
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe(
        {
          next: (value) => {
            this.validateMaxSalary(value);
          }
        }
      )
  }

  public ngOnDestroy() {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

  public validateMaxSalary(maxSalary: number) {
    const minSalaryControl = this.payment.get('minSalary')!
    const { value } = minSalaryControl;
    if (maxSalary < value) {
      minSalaryControl.setValue(maxSalary);
      this.settingInputs['minSalary'].updateCurrencyInput(maxSalary);
    }
  }

  public validateMinSalary(minSalary: number) {
    const maxSalaryControl = this.payment.get('maxSalary')!
    const { value } = maxSalaryControl;
    if (minSalary > value) {
      maxSalaryControl.setValue(minSalary);
      this.settingInputs['maxSalary'].updateCurrencyInput(minSalary);
    }
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
