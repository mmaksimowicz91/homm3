import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonheroesComponent } from './dungeonheroes.component';

describe('DungeonheroesComponent', () => {
  let component: DungeonheroesComponent;
  let fixture: ComponentFixture<DungeonheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DungeonheroesComponent]
    });
    fixture = TestBed.createComponent(DungeonheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
