import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowerbuildingsComponent } from './towerbuildings.component';

describe('TowerbuildingsComponent', () => {
  let component: TowerbuildingsComponent;
  let fixture: ComponentFixture<TowerbuildingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TowerbuildingsComponent]
    });
    fixture = TestBed.createComponent(TowerbuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
