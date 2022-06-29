import { Component, OnDestroy, OnInit, Optional, Self, ViewChild } from '@angular/core';
import { FormBuilder, NgControl, Validators } from '@angular/forms';
import { Subject, filter, takeUntil } from 'rxjs';
import { InputValueAccessor } from 'src/app/classes/input-value-accessor';
import { LanguageDisplayDefinition } from '../language-display/language-display.component';
import { LanguageInputComponent, LanguageInputState } from '../language-input/language-input.component';

@Component({
  selector: 'app-language-list-input',
  templateUrl: './language-list-input.component.html',
  styleUrls: ['./language-list-input.component.scss'],
  providers: [{ provide: InputValueAccessor, useExisting: LanguageListInputComponent }]
})
export class LanguageListInputComponent extends InputValueAccessor implements OnInit, OnDestroy {

  constructor(@Self() @Optional() ngControl: NgControl,private fb: FormBuilder) {
    super(ngControl);
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
    this.setup();
    this.languageInputControl.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe(
      {
        next: () => {
          this.canAddLanguage = this.languageInputControl.valid;
        }
      }
    )
    this.setValueToNgControl();
  }

  ngOnDestroy(): void {
    this.lifecycle.next('destroy');
    this.lifecycle.complete();
  }

  private addLanguage(state: LanguageInputState) {
    if (this.languages.findIndex(el => el.name === state.language) !== -1) return;
    this.languages.push({
      name: state.language,
      level: state.certification.level
    })
    this.setValueToNgControl();
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
    this.setValueToNgControl();
  }

  private setValueToNgControl() {
    if(this.ngControl) this.ngControl.control!.setValue(this.languages);
  }

}
