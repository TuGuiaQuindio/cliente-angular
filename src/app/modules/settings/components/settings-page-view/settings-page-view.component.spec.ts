import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPageViewComponent } from './settings-page-view.component';

describe('SettingsPageViewComponent', () => {
  let component: SettingsPageViewComponent;
  let fixture: ComponentFixture<SettingsPageViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPageViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
