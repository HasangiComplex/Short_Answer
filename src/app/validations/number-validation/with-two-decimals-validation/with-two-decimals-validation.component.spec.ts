import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithTwoDecimalsValidationComponent } from './with-two-decimals-validation.component';

describe('WithTwoDecimalsValidationComponent', () => {
  let component: WithTwoDecimalsValidationComponent;
  let fixture: ComponentFixture<WithTwoDecimalsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithTwoDecimalsValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithTwoDecimalsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
