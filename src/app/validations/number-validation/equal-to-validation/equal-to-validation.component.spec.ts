import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualToValidationComponent } from './equal-to-validation.component';

describe('EqualToValidationComponent', () => {
  let component: EqualToValidationComponent;
  let fixture: ComponentFixture<EqualToValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqualToValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EqualToValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
