import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationDropdownComponent } from './validation-dropdown.component';

describe('ValidationDropdownComponent', () => {
  let component: ValidationDropdownComponent;
  let fixture: ComponentFixture<ValidationDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
