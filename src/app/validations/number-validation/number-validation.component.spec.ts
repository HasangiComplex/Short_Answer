import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberValidationComponent } from './number-validation.component';

describe('NumberValidationComponent', () => {
  let component: NumberValidationComponent;
  let fixture: ComponentFixture<NumberValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
