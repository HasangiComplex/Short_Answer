import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoesntContainValidationComponent } from './doesnt-contain-validation.component';

describe('DoesntContainValidationComponent', () => {
  let component: DoesntContainValidationComponent;
  let fixture: ComponentFixture<DoesntContainValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoesntContainValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoesntContainValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
