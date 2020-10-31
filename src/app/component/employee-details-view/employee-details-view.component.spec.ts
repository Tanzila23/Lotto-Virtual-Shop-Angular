import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsViewComponent } from './employee-details-view.component';

describe('EmployeeDetailsViewComponent', () => {
  let component: EmployeeDetailsViewComponent;
  let fixture: ComponentFixture<EmployeeDetailsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeDetailsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
