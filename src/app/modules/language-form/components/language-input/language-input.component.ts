import { Component, EventEmitter, OnDestroy, OnInit, Optional, Output, Self, ViewChild } from '@angular/core';
import { NgControl } from '@angular/forms';
import { map, last, concatMap, scan, Subject, filter, BehaviorSubject } from 'rxjs';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { SelectOption } from 'src/app/modules/shared/components/select/select.component';
import { StepsComponent } from 'src/app/modules/shared/components/steps/steps.component';
import { LanguageApiService } from '../../services/language-api.service';

export type CertificationLevel = {
  name: string,
  description: string,
  level: number,
}
export type SelectState = {
  options: SelectOption[],
  selected: number,
  certificate: CertificationLevel
}
export type LanguageInputState = {
  language: string,
  certification: CertificationLevel & { level: number }
}
@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss'],
  providers: [{ provide: InputValueAccessor, useExisting: LanguageInputComponent }]
})
export class LanguageInputComponent extends InputValueAccessor implements OnInit, OnDestroy {

  constructor(@Self() @Optional() ngControl: NgControl, private languageSrv: LanguageApiService) {
    super(ngControl);
  }
  @Output() public languageSelected = new EventEmitter<LanguageInputState>();
  @ViewChild(StepsComponent) public steps!: StepsComponent;

  public certificationLevels: CertificationLevel[] = [
    { name: "A1", level: 0, description: "Principiante" },
    { name: "A2", level: 1, description: "Elemental" },
    { name: "B1", level: 2, description: "Intermedio" },
    { name: "B2", level: 3, description: "Intermedio Superior" },
    { name: "C1", level: 4, description: "Avanzado" },
    { name: "C2", level: 5, description: "Competente" },
  ]
  public currentLanguage?: string;
  public currentCertification: CertificationLevel = this.certificationLevels[0];
  public lifecycle = new Subject<string>();
  public optionStateSubj = new BehaviorSubject<SelectState>({
    options: [],
    selected: 0,
    certificate: this.certificationLevels[0]
  });

  public get optionState$() { return this.optionStateSubj.asObservable() }
  public get options$() { return this.optionState$.pipe(map(state => state.options)) }
  public get selected$() { return this.optionState$.pipe(map(state => state.selected)) }
  public get certificate$() { return this.optionState$.pipe(map(state => state.certificate)) }

  public get destroy$() {
    return this.lifecycle
      .asObservable()
      .pipe(
        filter(state => state == 'destroy')
      );
  }

  public ngOnInit(): void {
    this.languageSrv.getLanguagesCertifications()
      .pipe(
        concatMap((languages: string[]) => languages),
        map((language: string) => ({ value: language.toLowerCase(), label: language } as SelectOption)),
        scan((acc: SelectOption[], value: SelectOption) => [...acc, value], [{ value: undefined, label: "Seleccione" }] as SelectOption[]),
        last()
      )
      .subscribe({
        next: (options: SelectOption[]) => {
          const labels = options.map(el => el.label);
          console.warn(labels);
          const value = this.optionStateSubj.value;
          this.optionStateSubj.next({
            ...value,
            options
          })
        }
      })
  }

  public ngOnDestroy() {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

  public reset() {
    this.currentLanguage = undefined;
    this.currentCertification = this.certificationLevels[0];
    this.steps.setSelected(0);
    this.setNgControlValue();
    const value = this.optionStateSubj.value;
    this.optionStateSubj.next({
      ...value,
      selected: 0, 
      certificate: this.currentCertification,
    })
  }

  private setNgControlValue(languageName?: string, certificationLevel: number = 0) {
    if (this.ngControl) this.ngControl.control!.setValue({ name: languageName, level: certificationLevel })
  }

  public onLanguageSelected(select: SelectOption) {
    this.currentLanguage = select.value;
    const value = this.optionStateSubj.value;
    const { options } = value;
    const languageIdx = options.findIndex(el => select == el);
    if (languageIdx == -1) return;
    const certificationLevel = this.certificationLevels.findIndex((el) => el === this.currentCertification);
    this.optionStateSubj.next({
      ...value,
      selected: languageIdx
    })
    this.languageSelected.emit({
      language: select.value,
      certification: {
        ...this.currentCertification!,
        level: certificationLevel,
      }
    });
    this.setNgControlValue(this.currentLanguage, certificationLevel ?? 0);
  }

  public onCertificationLevelSelected(idx: number) {
    const certification = this.certificationLevels[idx];
    this.currentCertification = certification;
    const value = this.optionStateSubj.value;
    this.optionStateSubj.next({
      ...value,
      certificate: certification
    });
    if (this.currentLanguage == null) return;
    this.currentCertification
    this.languageSelected.emit({
      language: this.currentLanguage,
      certification: {
        ...certification,
        level: idx,
      }
    })
    this.setNgControlValue(this.currentLanguage, idx)
  }
}
