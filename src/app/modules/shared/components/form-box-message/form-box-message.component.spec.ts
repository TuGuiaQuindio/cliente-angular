import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBoxMessageComponent } from './form-box-message.component';

describe('FormBoxMessageComponent', () => {
  let component: FormBoxMessageComponent;
  let fixture: ComponentFixture<FormBoxMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBoxMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBoxMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
