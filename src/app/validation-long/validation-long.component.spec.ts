import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationLongComponent } from './validation-long.component';

describe('ValidationLongComponent', () => {
  let component: ValidationLongComponent;
  let fixture: ComponentFixture<ValidationLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationLongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
