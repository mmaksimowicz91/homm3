import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortressDwellingComponent } from './fortress-dwelling.component';

describe('FortressDwellingComponent', () => {
  let component: FortressDwellingComponent;
  let fixture: ComponentFixture<FortressDwellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortressDwellingComponent]
    });
    fixture = TestBed.createComponent(FortressDwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
