import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriesityPurposeComponent } from './triesity-purpose.component';

describe('TriesityPurposeComponent', () => {
  let component: TriesityPurposeComponent;
  let fixture: ComponentFixture<TriesityPurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriesityPurposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriesityPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
