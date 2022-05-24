import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable, Subject, takeUntil } from 'rxjs';
import { SlideshowComponent } from 'src/app/modules/slideshow/components/slideshow/slideshow.component';
import { DecisionButtonDefinition } from '../decision-button-container/decision-button-container.component';

type SectionMap = { [key: number]: FormGroup };
type SlideshowState = { count: number, currentSlide: number }
@Component({
  selector: 'app-active-module-data-form',
  templateUrl: './active-module-data-form.component.html',
  styleUrls: ['./active-module-data-form.component.scss']
})
export class ActiveModuleDataFormComponent implements OnInit, OnDestroy {

  constructor(private fb: FormBuilder) { }

  private slideshow!: SlideshowComponent;
  private destroySubj = new Subject();
  private slideshowStateSubj = new BehaviorSubject<SlideshowState>({ count: 1, currentSlide: 1 });
  private decisionButtonStateSubj = new BehaviorSubject<DecisionButtonDefinition>(
    {
      accept: { label: "Siguiente", disabled: false },
      cancel: { label: "Anterior", disabled: false }
    }
  );

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

  private sectionMap: SectionMap = {
    0: this.contactInformation,
    1: this.personalInformation,
    2: this.aditionalInformation,
  }

  @Input() rolType = 1;
  @ViewChild('slideshow') public set hostSlideshow(value: SlideshowComponent) {
    this.slideshow = value;
    setTimeout(() => {
      this.updateSlideshowState();
      this.updateButtonState();
      this.validateNextButtonState();
    });
  }

  ngOnInit(): void {
    this.dataForm.valueChanges
      .pipe(takeUntil(this.destroySubj.asObservable()))
      .subscribe(
        { next: () => this.validateNextButtonState() }
      );
  }

  ngOnDestroy(): void {
    this.destroySubj.complete();
  }

  public onNextClick(): void {
    const doSignup = this.isLastSlide();
    this.slideshow.next();
    this.updateButtonState();
    this.updateSlideshowState();
    this.validateNextButtonState();
    if (doSignup) this.onFormSignup();
  }

  private isLastSlide(): boolean {
    const count = this.slideshow.count;
    const currentSlide = this.slideshow.getCurrentIndex();
    return currentSlide === count - 1;
  }

  public validateNextButtonState() {
    const currentSlide = this.slideshow.getCurrentIndex();
    const group = this.sectionMap[currentSlide];
    const currentState = this.decisionButtonStateSubj.value;
    currentState.accept.disabled = !group.valid;
    this.decisionButtonStateSubj.next(currentState);
  }

  public onFormSignup(): void {
    this.formCompleted = true;
    const state: DecisionButtonDefinition = {
      accept: { label: 'Finalizar', disabled: true },
      cancel: { label: 'Anterior', disabled: true },
    }
    this.decisionButtonStateSubj.next(state)
  }

  private updateSlideshowState(): void {
    const count = this.slideshow.count;
    const currentSlide = this.slideshow.getCurrentIndex();
    this.slideshowStateSubj.next({ count, currentSlide })
  }

  private updateButtonState(): void {
    const count = this.slideshow.count;
    const currentSlide = this.slideshow.getCurrentIndex();
    const state = this.decisionButtonStateSubj.getValue() as DecisionButtonDefinition;
    state.cancel.disabled = currentSlide <= 0;
    state.accept.label = currentSlide >= count - 1 ? "Finalizar" : "Siguiente";
    this.decisionButtonStateSubj.next(state);
  }

  public onPreviousClick(): void {
    this.slideshow.previous();
    this.updateSlideshowState();
    this.updateButtonState();
    this.validateNextButtonState();
  }

  public get slideshowState$(): Observable<SlideshowState> {
    return this.slideshowStateSubj.asObservable();
  }

  public get decisionButtonDefinition$(): Observable<DecisionButtonDefinition> {
    return this.decisionButtonStateSubj.asObservable();
  }

  public formCompleted = false;

}
