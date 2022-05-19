import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleSlideIndicatorComponent } from './bubble-slide-indicator.component';

describe('BubbleSlideIndicatorComponent', () => {
  let component: BubbleSlideIndicatorComponent;
  let fixture: ComponentFixture<BubbleSlideIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleSlideIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BubbleSlideIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
