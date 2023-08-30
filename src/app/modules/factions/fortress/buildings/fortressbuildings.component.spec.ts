import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortressbuildingsComponent } from './fortressbuildings.component';

describe('FortressbuildingsComponent', () => {
  let component: FortressbuildingsComponent;
  let fixture: ComponentFixture<FortressbuildingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortressbuildingsComponent]
    });
    fixture = TestBed.createComponent(FortressbuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
