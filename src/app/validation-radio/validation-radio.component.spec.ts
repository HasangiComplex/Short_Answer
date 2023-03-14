import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationRadioComponent } from './validation-radio.component';

describe('ValidationRadioComponent', () => {
  let component: ValidationRadioComponent;
  let fixture: ComponentFixture<ValidationRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
