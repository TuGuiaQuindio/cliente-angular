import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkAccessCardComponent } from './link-access-card.component';

describe('LinkAccessCardComponent', () => {
  let component: LinkAccessCardComponent;
  let fixture: ComponentFixture<LinkAccessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkAccessCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkAccessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
