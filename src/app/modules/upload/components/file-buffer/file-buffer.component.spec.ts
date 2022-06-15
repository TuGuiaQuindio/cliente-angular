import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBufferComponent } from './file-buffer.component';

describe('FileBufferComponent', () => {
  let component: FileBufferComponent;
  let fixture: ComponentFixture<FileBufferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileBufferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBufferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
