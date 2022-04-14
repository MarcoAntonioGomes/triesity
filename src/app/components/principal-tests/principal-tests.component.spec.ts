import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalTestsComponent } from './principal-tests.component';

describe('PrincipalTestsComponent', () => {
  let component: PrincipalTestsComponent;
  let fixture: ComponentFixture<PrincipalTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrincipalTestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
