import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsStringValidationComponent } from './is-string-validation.component';

describe('IsStringValidationComponent', () => {
  let component: IsStringValidationComponent;
  let fixture: ComponentFixture<IsStringValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsStringValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsStringValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
