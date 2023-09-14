import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfernoDwellingComponent } from './inferno-dwelling.component';

describe('InfernoDwellingComponent', () => {
  let component: InfernoDwellingComponent;
  let fixture: ComponentFixture<InfernoDwellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfernoDwellingComponent]
    });
    fixture = TestBed.createComponent(InfernoDwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
