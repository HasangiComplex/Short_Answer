import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotBetweenValidationComponent } from './not-between-validation.component';

describe('NotBetweenValidationComponent', () => {
  let component: NotBetweenValidationComponent;
  let fixture: ComponentFixture<NotBetweenValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotBetweenValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotBetweenValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
