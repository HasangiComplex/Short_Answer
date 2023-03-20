import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthValidationComponent } from './length-validation.component';

describe('LengthValidationComponent', () => {
  let component: LengthValidationComponent;
  let fixture: ComponentFixture<LengthValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LengthValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
