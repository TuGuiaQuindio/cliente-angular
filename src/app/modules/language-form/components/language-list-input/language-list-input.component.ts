import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, filter, takeUntil } from 'rxjs';
import { LanguageDisplayDefinition } from '../language-display/language-display.component';
import { LanguageInputComponent, LanguageInputState } from '../language-input/language-input.component';

@Component({
  selector: 'app-language-list-input',
  templateUrl: './language-list-input.component.html',
  styleUrls: ['./language-list-input.component.scss']
})
export class LanguageListInputComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) {
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

  private addLanguage(state: LanguageInputState) {
    if (this.languages.findIndex(el => el.name === state.language.name) !== -1) return;
    this.languages.push({
      name: state.language.name,
      level: state.certification.level
    })
  }

  public onAddClick() {
    const language: LanguageInputState = {
      language: this.languageInput.currentLanguage!,
      certification: this.languageInput.currentCertification!
    }
    this.addLanguage(language);
    this.languageInput.reset();
    this.canAddLanguage = false;
  }

  public deleteEntry(idx: number) {
    this.languages.splice(idx, 1);
  }

}
