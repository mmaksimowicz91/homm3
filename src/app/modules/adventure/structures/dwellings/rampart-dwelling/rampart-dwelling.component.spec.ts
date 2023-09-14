import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RampartDwellingComponent } from './rampart-dwelling.component';

describe('RampartDwellingComponent', () => {
  let component: RampartDwellingComponent;
  let fixture: ComponentFixture<RampartDwellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RampartDwellingComponent]
    });
    fixture = TestBed.createComponent(RampartDwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
