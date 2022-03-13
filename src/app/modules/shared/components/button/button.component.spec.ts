import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define a type default', () => {
    let type = component.type;
    expect(type).toBe('default');
  })

  it('should change type as needed', () => {
    let originalType = component.type;
    expect(component.type).withContext('starts with \'default\' type').toBe('default');
    component.type = 'emphasis';
    expect(component.type).withContext('changing to be \'emphasis\'').toBe('emphasis');
    expect(originalType).withContext('different from original type').not.toBe(component.type);
  })
});
