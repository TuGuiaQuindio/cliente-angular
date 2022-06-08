import { Component, EventEmitter, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SlideComponent } from 'src/app/modules/slideshow/components/slide/slide.component';
import { SectionMap } from '../../interfaces/active-form';
import { ActiveFormComponent } from '../active-form/active-form.component';

@Component({
  selector: 'app-guide-extra-form',
  templateUrl: './guide-extra-form.component.html',
  styleUrls: ['./guide-extra-form.component.scss']
})
export class GuideExtraFormComponent extends ActiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) {
    super();
  }

  @Output() public override slidesLoad = new EventEmitter<SlideComponent[]>();

  @ViewChildren(SlideComponent) private set hostSlide(values: QueryList<SlideComponent>) {
    this.slides = values.toArray();
    this.slidesLoad.next(this.slides);
  }

  public contactInformation: FormGroup = this.fb.group({
    phoneNumber: ['', [Validators.required, Validators.pattern(/^(?:\(\+[0-9]{1,3}\)|\+[0-9]{1,3}|.?)\s?[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{2,6}[\s-]?[0-9]{2,6}$/)]],
  });

  public personalInformation: FormGroup = this.fb.group({
    city: ['', [Validators.required]],
  });

  public birthdateInformation: FormGroup = this.fb.group({
    birthdate: ["", [Validators.required, Validators.pattern(/\d{4}-\d{2}-\d{2}/)]]
  });

  public aditionalInformation: FormGroup = this.fb.group({
    hasTransportVehicle: [false, [Validators.required]],
  });

  public override dataForm: FormGroup = this.fb.group({
    personalInformation: this.personalInformation,
    contactInformation: this.contactInformation,
    birthdateInformation: this.birthdateInformation,
    aditionalInformation: this.aditionalInformation,
  });

  public override sectionMap: SectionMap = {
    0: this.contactInformation,
    1: this.personalInformation,
    2: this.birthdateInformation,
    3: this.aditionalInformation,
  }

  public override doSignup(): any & { urlSuffix: string } {
    const contactInformation = this.dataForm.get('contactInformation')!;
    const personalInformation = this.dataForm.get('personalInformation')!;
    const birthdateInformation = this.dataForm.get('birthdateInformation')!;
    const aditionalInformation = this.dataForm.get('aditionalInformation')!;
    const phoneNumber = contactInformation.get('phoneNumber')!.value;
    const city = personalInformation.get('city')!.value;
    const birthDate = birthdateInformation.get('birthdate')!.value;
    const hasTransport = aditionalInformation.get('hasTransportVehicle')!.value;
    return { phoneNumber, city, birthDate, hasTransport, urlSuffix: '/guide' };
  }

  ngOnInit(): void {
  }

}
