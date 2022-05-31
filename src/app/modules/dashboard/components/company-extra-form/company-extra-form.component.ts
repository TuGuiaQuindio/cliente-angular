import { Component, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SlideComponent } from 'src/app/modules/slideshow/components/slide/slide.component';
import { SectionMap } from '../../interfaces/active-form';
import { ActiveFormComponent } from '../active-form/active-form.component';

@Component({
  selector: 'app-company-extra-form',
  templateUrl: './company-extra-form.component.html',
  styleUrls: ['./company-extra-form.component.scss']
})
export class CompanyExtraFormComponent extends ActiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    super();
  }

  @Output() public override slidesLoad = new EventEmitter<SlideComponent[]>();

  @ViewChildren(SlideComponent) private set hostSlide(values: QueryList<SlideComponent>) {
    this.slides = values.toArray();
    this.slidesLoad.next(this.slides);
  }

  public enterpriseDetails: FormGroup = this.fb.group({
    mainActivity: ['', [Validators.required, Validators.minLength(16)]]
  });

  public contactInformation: FormGroup = this.fb.group({
    phoneNumber: ['', [Validators.required, Validators.pattern(/^(?:\(\+[0-9]{1,3}\)|\+[0-9]{1,3}|.?)\s?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{2,6}[\s-]?[0-9]{2,6}$/)]],
  });

  public override dataForm: FormGroup = this.fb.group({
    contactInformation: this.contactInformation,
    enterpriseDetails: this.enterpriseDetails,
  });

  public override sectionMap: SectionMap = {
    0: this.contactInformation,
    1: this.enterpriseDetails,
  }

  public override doSignup() {
    console.log("Enterprise signup");
  }

  ngOnInit(): void {
  }

}
