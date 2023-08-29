import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RampartUnitsComponent } from './rampartunits.component';

describe('RampartUnitsComponent', () => {
  let component: RampartUnitsComponent;
  let fixture: ComponentFixture<RampartUnitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RampartUnitsComponent],
    });
    fixture = TestBed.createComponent(RampartUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
