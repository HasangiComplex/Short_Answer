import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextValidationComponent } from './text-validation.component';

describe('TextValidationComponent', () => {
  let component: TextValidationComponent;
  let fixture: ComponentFixture<TextValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
