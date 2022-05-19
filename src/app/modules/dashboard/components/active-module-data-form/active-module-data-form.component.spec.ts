import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveModuleDataFormComponent } from './active-module-data-form.component';

describe('ActiveModuleDataFormComponent', () => {
  let component: ActiveModuleDataFormComponent;
  let fixture: ComponentFixture<ActiveModuleDataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveModuleDataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveModuleDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
