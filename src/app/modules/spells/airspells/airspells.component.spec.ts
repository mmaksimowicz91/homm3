import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirspellsComponent } from './airspells.component';

describe('AirspellsComponent', () => {
  let component: AirspellsComponent;
  let fixture: ComponentFixture<AirspellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirspellsComponent]
    });
    fixture = TestBed.createComponent(AirspellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
