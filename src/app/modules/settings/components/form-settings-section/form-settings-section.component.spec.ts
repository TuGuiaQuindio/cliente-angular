import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSettingsSectionComponent } from './form-settings-section.component';

describe('FormSettingsSectionComponent', () => {
  let component: FormSettingsSectionComponent;
  let fixture: ComponentFixture<FormSettingsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSettingsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSettingsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
