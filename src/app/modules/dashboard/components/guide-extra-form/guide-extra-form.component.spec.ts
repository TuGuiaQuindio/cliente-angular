import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideExtraFormComponent } from './guide-extra-form.component';

describe('GuideExtraFormComponent', () => {
  let component: GuideExtraFormComponent;
  let fixture: ComponentFixture<GuideExtraFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideExtraFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideExtraFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
