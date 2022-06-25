import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageListInputComponent } from './language-list-input.component';

describe('LanguageListInputComponent', () => {
  let component: LanguageListInputComponent;
  let fixture: ComponentFixture<LanguageListInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageListInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
