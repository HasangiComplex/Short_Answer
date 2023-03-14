import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTopNewComponent } from './body-top-new.component';

describe('BodyTopNewComponent', () => {
  let component: BodyTopNewComponent;
  let fixture: ComponentFixture<BodyTopNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTopNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTopNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
