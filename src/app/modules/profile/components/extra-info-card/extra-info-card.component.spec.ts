import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfoCardComponent } from './extra-info-card.component';

describe('ExtraInfoCardComponent', () => {
  let component: ExtraInfoCardComponent;
  let fixture: ComponentFixture<ExtraInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraInfoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
