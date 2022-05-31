import { AfterViewInit, Component, Input, OnDestroy, OnInit, Type, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, delay, Observable, Subject, takeUntil, map, of, takeWhile, flatMap, forkJoin, filter, tap } from 'rxjs';
import { AnchorDirective } from 'src/app/directive/anchor.directive';
import { SlideComponent } from 'src/app/modules/slideshow/components/slide/slide.component';
import { SlideshowComponent } from 'src/app/modules/slideshow/components/slideshow/slideshow.component';
import { ActiveFormComponent } from '../active-form/active-form.component';
import { DecisionButtonDefinition } from '../decision-button-container/decision-button-container.component';
import { GuideExtraFormComponent } from '../guide-extra-form/guide-extra-form.component';

type SectionMap = { [key: number]: FormGroup };
type SlideshowState = { count: number, currentSlide: number }
@Component({
  selector: 'app-active-module-data-form',
  templateUrl: './active-module-data-form.component.html',
  styleUrls: ['./active-module-data-form.component.scss']
})
export class ActiveModuleDataFormComponent implements OnInit, AfterViewInit, OnDestroy {

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
  private lifecycleSubj = new BehaviorSubject<string>("");

  public dataForm: FormGroup = this.fb.group({});
  private sectionMap!: SectionMap;

  @ViewChild(AnchorDirective) public appAnchor!: AnchorDirective;

  @ViewChild('slideshow') public set hostSlideshow(value: SlideshowComponent) {
    this.slideshow = value;
  }

  public updateGlobalState() {
    this.updateControlsState();
    this.updateSlideshowSize();
  }

  public updateSlideshowSize() {
    this.slideshow.updateSize();
  }

  public updateControlsState() {
    this.updateSlideshowState();
    this.updateButtonState();
    this.validateNextButtonState();
  }

  ngOnInit(): void {
    this.lifecycleSubj.next("init");
  }

  ngAfterViewInit(): void {
    this.lifecycleSubj.next("afterViewInit");
  }

  public get lifecycle$(): Observable<string> {
    return this.lifecycleSubj.asObservable();
  }

  public loadActiveForm(component: Type<ActiveFormComponent>): Observable<ActiveFormComponent> {
    return of({})
      .pipe(
        map(() => {
          const containerRef = this.appAnchor.viewContainerRef;
          const instance = containerRef.createComponent(component).instance
          return instance as ActiveFormComponent;
        })
      );
  }

  public setupActiveForm(component: ActiveFormComponent) {
    const { dataForm, sectionMap, slides } = component;
    this.sectionMap = sectionMap;
    this.dataForm = dataForm;
    this.slideshowStateSubj.next({
      currentSlide: 1,
      count: slides.length,
    });
    this.dataForm.valueChanges
      .pipe(
        takeUntil(this.destroySubj.asObservable()),
      )
      .subscribe(
        { next: () => this.validateNextButtonState() }
      );
  }

  ngOnDestroy(): void {
    this.lifecycleSubj.next("destroy");
    this.lifecycleSubj.complete();
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
    if (!this.sectionMap) return;
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
