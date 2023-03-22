import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTextValidationComponent } from './is-text-validation.component';

describe('IsTextValidationComponent', () => {
  let component: IsTextValidationComponent;
  let fixture: ComponentFixture<IsTextValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsTextValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsTextValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
