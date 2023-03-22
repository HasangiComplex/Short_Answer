import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaterThanValidationComponent } from './greater-than-validation.component';

describe('GreaterThanValidationComponent', () => {
  let component: GreaterThanValidationComponent;
  let fixture: ComponentFixture<GreaterThanValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreaterThanValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreaterThanValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
