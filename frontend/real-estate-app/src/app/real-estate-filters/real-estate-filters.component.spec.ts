import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateFiltersComponent } from './real-estate-filters.component';

describe('RealEstateFiltersComponent', () => {
  let component: RealEstateFiltersComponent;
  let fixture: ComponentFixture<RealEstateFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealEstateFiltersComponent]
    });
    fixture = TestBed.createComponent(RealEstateFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
