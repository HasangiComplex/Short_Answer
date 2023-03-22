import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsNumberValidationComponent } from './is-number-validation.component';

describe('IsNumberValidationComponent', () => {
  let component: IsNumberValidationComponent;
  let fixture: ComponentFixture<IsNumberValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsNumberValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsNumberValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
