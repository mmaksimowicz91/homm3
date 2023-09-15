import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMiscComponent } from './travel-misc.component';

describe('TravelMiscComponent', () => {
  let component: TravelMiscComponent;
  let fixture: ComponentFixture<TravelMiscComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelMiscComponent]
    });
    fixture = TestBed.createComponent(TravelMiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
