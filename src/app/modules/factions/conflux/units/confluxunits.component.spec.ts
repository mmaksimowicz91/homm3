import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfluxunitsComponent } from './confluxunits.component';

describe('ConfluxunitsComponent', () => {
  let component: ConfluxunitsComponent;
  let fixture: ComponentFixture<ConfluxunitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfluxunitsComponent]
    });
    fixture = TestBed.createComponent(ConfluxunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
