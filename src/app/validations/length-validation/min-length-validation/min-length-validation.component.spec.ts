import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinLengthValidationComponent } from './min-length-validation.component';

describe('MinLengthValidationComponent', () => {
  let component: MinLengthValidationComponent;
  let fixture: ComponentFixture<MinLengthValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinLengthValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MinLengthValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
