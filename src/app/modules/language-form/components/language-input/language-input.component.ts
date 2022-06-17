import { Component, OnInit } from '@angular/core';
import { map, Observable, BehaviorSubject, Subject, takeUntil, filter, last, concatMap, scan } from 'rxjs';
import { Certificate, Language } from 'src/app/mock/data';
import { SelectOption } from 'src/app/modules/shared/components/select/select.component';
import { LanguageApiService } from '../../services/language-api.service';

export type GlobalInputState = {
  language: SelectState,
  certificate: SelectState,
  level: SelectState
}

export type SelectState = {
  options: SelectOption[],
  selected: number,
  disabled: boolean,
  elementSelection: (option: SelectOption) => void;
}
@Component({
  selector: 'app-language-input',
  templateUrl: './language-input.component.html',
  styleUrls: ['./language-input.component.scss']
})
export class LanguageInputComponent implements OnInit {

  constructor(private languageSrv: LanguageApiService) { }

  public currentLanguage?: Language;
  public currentCertificate?: Certificate;
  public currentLevel?: number;

  private inputSubj = new BehaviorSubject<GlobalInputState>({
    language: { options: [], disabled: true, selected: 0, elementSelection: (option) => { this.languageSelected(option) } },
    certificate: { options: [], disabled: true, selected: 0, elementSelection: (option) => { this.certificateSelected(option) } },
    level: { options: [], disabled: true, selected: 0, elementSelection: (option) => { this.levelSelected(option) } },
  });

  public lifecycleSubj = new Subject<string>();
  public get destroy$(): Observable<string> {
    return this.lifecycleSubj
      .asObservable()
      .pipe(
        filter((state: string) => state === 'destroy'),
      );
  }

  public get inputSelects$() {
    return this.inputSubj
      .asObservable()
      .pipe(
        takeUntil(this.destroy$),
        map(state => {
          const { language, certificate, level } = state;
          return [language, certificate, level];
        })
      );
  }

  public languageSelected(select: SelectOption) {
    this.currentLanguage = select.value;
    this.languageSrv.getLanguagesCertifications()
      .pipe(
        concatMap(languages => languages),
        filter((lang: Language) => lang == this.currentLanguage),
        concatMap((lang: Language) => lang.certificates),
        map((certificate: Certificate) => {
          return { value: certificate, label: certificate.name } as SelectOption
        }),
        scan((acc: SelectOption[], value: SelectOption) => [...acc, value], [{ value: undefined, label: "Seleccione" }] as SelectOption[]),
        last()
      ).subscribe({
        next: (options: SelectOption[]) => {
          const { value } = this.inputSubj;
          this.inputSubj.next({
            ...value,
            certificate: {
              ...value.certificate,
              disabled: !this.currentLanguage,
              options
            }
          })
        }
      })
  }

  public certificateSelected(select: SelectOption) {
    this.currentCertificate = select.value;
    this.languageSrv.getLanguagesCertifications()
      .pipe(
        concatMap(languages => languages),
        filter((lang: Language) => lang == this.currentLanguage),
        concatMap((lang: Language) => lang.certificates),
        filter((certificate: Certificate) => certificate == this.currentCertificate),
        concatMap((certificate: Certificate) => certificate.levels),
        map((level: string) => {
          return { value: level, label: level } as SelectOption
        }),
        scan((acc: SelectOption[], value: SelectOption) => [...acc, value], [{ value: undefined, label: "Seleccione" }] as SelectOption[]),
        last()
      ).subscribe({
        next: (options: SelectOption[]) => {
          const { value } = this.inputSubj;
          this.inputSubj.next({
            ...value,
            level: {
              ...value.level,
              disabled: !this.currentCertificate,
              options: options
            }
          })
        }
      })
  }

  public levelSelected(select: SelectOption) {
    this.currentLevel = select.value;
  }

  ngOnInit(): void {
    this.languageSrv.getLanguagesCertifications()
      .pipe(
        concatMap((languages: Language[]) => languages),
        map((language: Language) => ({ value: language, label: language.name } as SelectOption)),
        scan((acc: SelectOption[], value: SelectOption) => [...acc, value], [{ value: undefined, label: "Seleccione" }] as SelectOption[]),
        last()
      )
      .subscribe({
        next: (options: SelectOption[]) => {
          const { value } = this.inputSubj;
          this.inputSubj.next({
            ...value,
            language: {
              ...value.language,
              disabled: false,
              options: options,
            }
          })
        }
      })
  }
}
