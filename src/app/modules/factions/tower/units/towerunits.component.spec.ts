import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerunitsComponent } from './towerunits.component';

describe('TowerunitsComponent', () => {
  let component: TowerunitsComponent;
  let fixture: ComponentFixture<TowerunitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowerunitsComponent]
    });
    fixture = TestBed.createComponent(TowerunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
