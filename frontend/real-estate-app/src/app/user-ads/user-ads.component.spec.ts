import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdsComponent } from './user-ads.component';

describe('UserAdsComponent', () => {
  let component: UserAdsComponent;
  let fixture: ComponentFixture<UserAdsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAdsComponent]
    });
    fixture = TestBed.createComponent(UserAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
