import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateAdsComponent } from './real-estate-ads.component';

describe('RealEstateAdsComponent', () => {
  let component: RealEstateAdsComponent;
  let fixture: ComponentFixture<RealEstateAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateAdsComponent]
    });
    fixture = TestBed.createComponent(RealEstateAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
