import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecisionButtonContainerComponent } from './active-form.component';

describe('DecisionButtonContainerComponent', () => {
  let component: DecisionButtonContainerComponent;
  let fixture: ComponentFixture<DecisionButtonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecisionButtonContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecisionButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
