import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffixValidationComponent } from './suffix-validation.component';

describe('SuffixValidationComponent', () => {
  let component: SuffixValidationComponent;
  let fixture: ComponentFixture<SuffixValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuffixValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuffixValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
