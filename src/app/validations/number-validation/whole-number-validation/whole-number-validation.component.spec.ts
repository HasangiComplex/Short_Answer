import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WholeNumberValidationComponent } from './whole-number-validation.component';

describe('WholeNumberValidationComponent', () => {
  let component: WholeNumberValidationComponent;
  let fixture: ComponentFixture<WholeNumberValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WholeNumberValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WholeNumberValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
