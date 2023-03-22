import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLengthValidationComponent } from './max-length-validation.component';

describe('MaxLengthValidationComponent', () => {
  let component: MaxLengthValidationComponent;
  let fixture: ComponentFixture<MaxLengthValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxLengthValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaxLengthValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
