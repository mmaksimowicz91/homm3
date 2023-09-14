import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralUnitsComponent } from './neutral-units.component';

describe('NeutralUnitsComponent', () => {
  let component: NeutralUnitsComponent;
  let fixture: ComponentFixture<NeutralUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeutralUnitsComponent]
    });
    fixture = TestBed.createComponent(NeutralUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
