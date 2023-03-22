import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlValidationComponent } from './url-validation.component';

describe('UrlValidationComponent', () => {
  let component: UrlValidationComponent;
  let fixture: ComponentFixture<UrlValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlValidationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
