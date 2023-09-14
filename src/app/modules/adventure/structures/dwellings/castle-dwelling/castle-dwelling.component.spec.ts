import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleDwellingComponent } from './castle-dwelling.component';

describe('CastleDwellingComponent', () => {
  let component: CastleDwellingComponent;
  let fixture: ComponentFixture<CastleDwellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CastleDwellingComponent]
    });
    fixture = TestBed.createComponent(CastleDwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
