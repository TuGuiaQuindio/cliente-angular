import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSettingsButtonComponent } from './panel-settings-button.component';

describe('PanelSettingsButtonComponent', () => {
  let component: PanelSettingsButtonComponent;
  let fixture: ComponentFixture<PanelSettingsButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelSettingsButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelSettingsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
