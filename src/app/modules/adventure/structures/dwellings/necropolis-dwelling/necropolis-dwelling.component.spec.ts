import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecropolisDwellingComponent } from './necropolis-dwelling.component';

describe('NecropolisDwellingComponent', () => {
  let component: NecropolisDwellingComponent;
  let fixture: ComponentFixture<NecropolisDwellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NecropolisDwellingComponent]
    });
    fixture = TestBed.createComponent(NecropolisDwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
