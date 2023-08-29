import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonunitsComponent } from './dungeonunits.component';

describe('DungeonunitsComponent', () => {
  let component: DungeonunitsComponent;
  let fixture: ComponentFixture<DungeonunitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DungeonunitsComponent]
    });
    fixture = TestBed.createComponent(DungeonunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
