import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthspellsComponent } from './earthspells.component';

describe('EarthspellsComponent', () => {
  let component: EarthspellsComponent;
  let fixture: ComponentFixture<EarthspellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarthspellsComponent]
    });
    fixture = TestBed.createComponent(EarthspellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
