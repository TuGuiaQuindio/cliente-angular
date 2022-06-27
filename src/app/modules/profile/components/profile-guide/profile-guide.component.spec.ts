import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGuideComponent } from './profile-guide.component';

describe('ProfileGuideComponent', () => {
  let component: ProfileGuideComponent;
  let fixture: ComponentFixture<ProfileGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
