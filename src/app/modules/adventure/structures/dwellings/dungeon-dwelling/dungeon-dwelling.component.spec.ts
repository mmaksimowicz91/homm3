import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonDwellingComponent } from './dungeon-dwelling.component';

describe('DungeonDwellingComponent', () => {
  let component: DungeonDwellingComponent;
  let fixture: ComponentFixture<DungeonDwellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DungeonDwellingComponent]
    });
    fixture = TestBed.createComponent(DungeonDwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
