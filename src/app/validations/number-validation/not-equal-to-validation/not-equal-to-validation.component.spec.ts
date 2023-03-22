import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotEqualToValidationComponent } from './not-equal-to-validation.component';

describe('NotEqualToValidationComponent', () => {
  let component: NotEqualToValidationComponent;
  let fixture: ComponentFixture<NotEqualToValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotEqualToValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotEqualToValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
