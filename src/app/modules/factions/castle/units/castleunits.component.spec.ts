import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleUnitsComponent } from './castleunits.component';

describe('CastleUnitsComponent', () => {
  let component: CastleUnitsComponent;
  let fixture: ComponentFixture<CastleUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CastleUnitsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CastleUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
