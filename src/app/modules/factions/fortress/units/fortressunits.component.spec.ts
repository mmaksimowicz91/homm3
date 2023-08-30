import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortressunitsComponent } from './fortressunits.component';

describe('FortressunitsComponent', () => {
  let component: FortressunitsComponent;
  let fixture: ComponentFixture<FortressunitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortressunitsComponent]
    });
    fixture = TestBed.createComponent(FortressunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
