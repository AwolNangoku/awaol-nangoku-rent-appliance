import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplianceManagementComponent } from './appliance-management.component';

describe('ApplianceManagementComponent', () => {
  let component: ApplianceManagementComponent;
  let fixture: ComponentFixture<ApplianceManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplianceManagementComponent]
    });
    fixture = TestBed.createComponent(ApplianceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
