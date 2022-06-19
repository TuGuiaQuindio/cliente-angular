import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, last, concatMap, scan, Subject, filter, BehaviorSubject } from 'rxjs';
import { Language } from 'src/app/mock/data';
import { SelectOption } from 'src/app/modules/shared/components/select/select.component';
import { LanguageApiService } from '../../services/language-api.service';

export type CertificationLevel = {
  name: string,
  description: string
}
export type SelectState = {
  options: SelectOption[],
  selected: number,
  certificate: CertificationLevel
}
@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss']
})
export class LanguageInputComponent implements OnInit, OnDestroy {

  constructor(private languageSrv: LanguageApiService) { }

  public certificationLevels: CertificationLevel[] = [
    { name: "A1", description: "Principiante" },
    { name: "A2", description: "Elemental" },
    { name: "B1", description: "Intermedio" },
    { name: "B2", description: "Intermedio Superior" },
    { name: "C1", description: "Avanzado" },
    { name: "C2", description: "Competente" },
  ]
  public currentLanguage?: Language;
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
        concatMap((languages: Language[]) => languages),
        map((language: Language) => ({ value: language, label: language.name } as SelectOption)),
        scan((acc: SelectOption[], value: SelectOption) => [...acc, value], [{ value: undefined, label: "Seleccione" }] as SelectOption[]),
        last()
      )
      .subscribe({
        next: (options: SelectOption[]) => {
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

  public languageSelected(select: SelectOption) {
    this.currentLanguage = select.value;
    const value = this.optionStateSubj.value;
    const { options } = value;
    const languageIdx = options.findIndex(el => select == el);
    if (languageIdx == -1) return;
    this.optionStateSubj.next({
      ...value,
      selected: languageIdx
    })
  }

  public onCertificationLevelSelected(idx: number) {
    const certification = this.certificationLevels[idx];
    const value = this.optionStateSubj.value;
    this.optionStateSubj.next({
      ...value,
      certificate: certification
    });
  }
}
