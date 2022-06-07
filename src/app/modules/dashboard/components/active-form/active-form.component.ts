import { Component, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SlideComponent } from 'src/app/modules/slideshow/components/slide/slide.component';
import { ActiveForm, SectionMap } from '../../interfaces/active-form';

@Component({
  selector: 'app-active-form',
  template: ``,
})
export class ActiveFormComponent implements ActiveForm {
  constructor() { }

  public slidesLoad!: EventEmitter<SlideComponent[]>;

  public slides!: SlideComponent[];
  public dataForm!: FormGroup;
  public sectionMap!: SectionMap;
  public doSignup(): any { };
}
