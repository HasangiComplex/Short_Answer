import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessThanValidationComponent } from './less-than-validation.component';

describe('LessThanValidationComponent', () => {
  let component: LessThanValidationComponent;
  let fixture: ComponentFixture<LessThanValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessThanValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessThanValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
