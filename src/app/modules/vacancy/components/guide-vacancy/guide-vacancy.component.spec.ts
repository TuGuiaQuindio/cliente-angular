import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideVacancyComponent } from './guide-vacancy.component';

describe('GuideVacancyComponent', () => {
  let component: GuideVacancyComponent;
  let fixture: ComponentFixture<GuideVacancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideVacancyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideVacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
