import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfluxbuildingsComponent } from './confluxbuildings.component';

describe('ConfluxbuildingsComponent', () => {
  let component: ConfluxbuildingsComponent;
  let fixture: ComponentFixture<ConfluxbuildingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfluxbuildingsComponent]
    });
    fixture = TestBed.createComponent(ConfluxbuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
