import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SlideComponent } from 'src/app/modules/slideshow/components/slide/slide.component';

type SectionMap = { [key: number]: FormGroup };
@Component({
  selector: 'app-guide-extra-form',
  templateUrl: './guide-extra-form.component.html',
  styleUrls: ['./guide-extra-form.component.scss']
})
export class GuideExtraFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  @ViewChildren(SlideComponent) private set hostSlide(values: QueryList<SlideComponent>) {
    this.slides = values.toArray();
  }

  public slides!: SlideComponent[];

  public contactInformation: FormGroup = this.fb.group({
    phoneNumber: ['', [Validators.required, Validators.pattern(/^(?:\(\+[0-9]{1,3}\)|\+[0-9]{1,3}|.?)\s?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{2,6}[\s-]?[0-9]{2,6}$/)]],
  });

  public personalInformation: FormGroup = this.fb.group({
    city: ['', [Validators.required]],
  });

  public aditionalInformation: FormGroup = this.fb.group({
    hasTransportVehicle: ['', [Validators.required]],
  });

  public dataForm: FormGroup = this.fb.group({
    personalInformation: this.personalInformation,
    contactInformation: this.contactInformation,
    aditionalInformation: this.aditionalInformation,
  });

  public sectionMap: SectionMap = {
    0: this.contactInformation,
    1: this.personalInformation,
    2: this.aditionalInformation,
  }

  ngOnInit(): void {
  }

}
