import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixValidationComponent } from './prefix-validation.component';

describe('PrefixValidationComponent', () => {
  let component: PrefixValidationComponent;
  let fixture: ComponentFixture<PrefixValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefixValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrefixValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
