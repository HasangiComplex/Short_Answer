import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaterOrEqualValidationComponent } from './greater-or-equal-validation.component';

describe('GreaterOrEqualValidationComponent', () => {
  let component: GreaterOrEqualValidationComponent;
  let fixture: ComponentFixture<GreaterOrEqualValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreaterOrEqualValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreaterOrEqualValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
