import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerheroesComponent } from './towerheroes.component';

describe('TowerheroesComponent', () => {
  let component: TowerheroesComponent;
  let fixture: ComponentFixture<TowerheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowerheroesComponent]
    });
    fixture = TestBed.createComponent(TowerheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
