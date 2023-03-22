import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessThanEqualValidationComponent } from './less-than-equal-validation.component';

describe('LessThanEqualValidationComponent', () => {
  let component: LessThanEqualValidationComponent;
  let fixture: ComponentFixture<LessThanEqualValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessThanEqualValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessThanEqualValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
