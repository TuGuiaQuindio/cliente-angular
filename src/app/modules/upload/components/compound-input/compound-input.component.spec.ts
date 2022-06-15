import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCompoundInputComponent } from './compound-input.component';

describe('UploadCompoundInputComponent', () => {
  let component: UploadCompoundInputComponent;
  let fixture: ComponentFixture<UploadCompoundInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCompoundInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCompoundInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
