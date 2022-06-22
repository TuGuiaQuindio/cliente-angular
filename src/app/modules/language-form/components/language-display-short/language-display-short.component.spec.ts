import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDisplayShortComponent } from './language-display-short.component';

describe('LanguageDisplayShortComponent', () => {
  let component: LanguageDisplayShortComponent;
  let fixture: ComponentFixture<LanguageDisplayShortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageDisplayShortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDisplayShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
