import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfernobuildingsComponent } from './infernobuildings.component';

describe('InfernobuildingsComponent', () => {
  let component: InfernobuildingsComponent;
  let fixture: ComponentFixture<InfernobuildingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfernobuildingsComponent]
    });
    fixture = TestBed.createComponent(InfernobuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
