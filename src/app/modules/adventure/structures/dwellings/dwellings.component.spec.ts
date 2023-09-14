import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DwellingsComponent } from './dwellings.component';

describe('DwellingsComponent', () => {
  let component: DwellingsComponent;
  let fixture: ComponentFixture<DwellingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DwellingsComponent]
    });
    fixture = TestBed.createComponent(DwellingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
