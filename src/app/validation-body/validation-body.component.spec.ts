import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationBodyComponent } from './validation-body.component';

describe('ValidationBodyComponent', () => {
  let component: ValidationBodyComponent;
  let fixture: ComponentFixture<ValidationBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationBodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
