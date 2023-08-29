import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfernoheroesComponent } from './infernoheroes.component';

describe('InfernoheroesComponent', () => {
  let component: InfernoheroesComponent;
  let fixture: ComponentFixture<InfernoheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfernoheroesComponent]
    });
    fixture = TestBed.createComponent(InfernoheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
