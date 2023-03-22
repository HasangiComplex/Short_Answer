import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetweenValidationComponent } from './between-validation.component';

describe('BetweenValidationComponent', () => {
  let component: BetweenValidationComponent;
  let fixture: ComponentFixture<BetweenValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetweenValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BetweenValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
