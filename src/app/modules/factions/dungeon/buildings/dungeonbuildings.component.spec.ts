import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonbuildingsComponent } from './dungeonbuildings.component';

describe('DungeonbuildingsComponent', () => {
  let component: DungeonbuildingsComponent;
  let fixture: ComponentFixture<DungeonbuildingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DungeonbuildingsComponent]
    });
    fixture = TestBed.createComponent(DungeonbuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
