import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerDwellingComponent } from './tower-dwelling.component';

describe('TowerDwellingComponent', () => {
  let component: TowerDwellingComponent;
  let fixture: ComponentFixture<TowerDwellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowerDwellingComponent]
    });
    fixture = TestBed.createComponent(TowerDwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
