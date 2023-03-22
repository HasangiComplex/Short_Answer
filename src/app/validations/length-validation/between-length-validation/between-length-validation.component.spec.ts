import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenLengthValidationComponent } from './between-length-validation.component';

describe('BetweenLengthValidationComponent', () => {
  let component: BetweenLengthValidationComponent;
  let fixture: ComponentFixture<BetweenLengthValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetweenLengthValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetweenLengthValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
