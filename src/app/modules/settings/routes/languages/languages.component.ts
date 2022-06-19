import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { filter, Subject, takeUntil } from 'rxjs';
import { LanguageDisplayDefinition } from 'src/app/modules/language-form/components/language-display/language-display.component';
import { LanguageInputComponent, LanguageInputState } from 'src/app/modules/language-form/components/language-input/language-input.component';
import { BaseRouteComponent } from '../base-route/base-route.component';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent extends BaseRouteComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) {
    super();
  }
  @ViewChild(LanguageInputComponent) public languageInput!: LanguageInputComponent;

  private lifecycle = new Subject<string>();
  public languages: LanguageDisplayDefinition[] = [];
  public languageInputControl = this.fb.control({ value: undefined }, Validators.required);
  public canAddLanguage = false;

  public get destroy$() {
    return this.lifecycle.pipe(
      filter(state => state === 'destroy')
    )
  }

  addLanguage(state: LanguageInputState) {
    if (this.languages.findIndex(el => el.name === state.language.name) !== -1) return;
    this.languages.push({
      name: state.language.name,
      level: state.certification.level
    })
  }

  onAddClick() {
    const language: LanguageInputState = {
      language: this.languageInput.currentLanguage!,
      certification: this.languageInput.currentCertification!
    }
    this.addLanguage(language);
    this.languageInput.reset();
    this.canAddLanguage = false;
  }

  ngOnInit(): void {
    this.languageInputControl.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      {
        next: () => {
          this.canAddLanguage = this.languageInputControl.valid;
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

}
