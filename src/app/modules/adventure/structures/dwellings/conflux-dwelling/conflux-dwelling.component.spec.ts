import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfluxDwellingComponent } from './conflux-dwelling.component';

describe('ConfluxDwellingComponent', () => {
  let component: ConfluxDwellingComponent;
  let fixture: ComponentFixture<ConfluxDwellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfluxDwellingComponent]
    });
    fixture = TestBed.createComponent(ConfluxDwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
