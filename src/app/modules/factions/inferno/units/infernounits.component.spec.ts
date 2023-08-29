import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfernounitsComponent } from './infernounits.component';

describe('InfernounitsComponent', () => {
  let component: InfernounitsComponent;
  let fixture: ComponentFixture<InfernounitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfernounitsComponent]
    });
    fixture = TestBed.createComponent(InfernounitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
