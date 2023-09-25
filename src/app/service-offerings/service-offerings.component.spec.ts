import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOfferingsComponent } from './service-offerings.component';

describe('ServiceOfferingsComponent', () => {
  let component: ServiceOfferingsComponent;
  let fixture: ComponentFixture<ServiceOfferingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOfferingsComponent]
    });
    fixture = TestBed.createComponent(ServiceOfferingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
