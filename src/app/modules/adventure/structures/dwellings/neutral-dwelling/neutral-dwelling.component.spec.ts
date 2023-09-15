import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeutralDwellingComponent } from './neutral-dwelling.component';

describe('NeutralDwellingComponent', () => {
  let component: NeutralDwellingComponent;
  let fixture: ComponentFixture<NeutralDwellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeutralDwellingComponent]
    });
    fixture = TestBed.createComponent(NeutralDwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
