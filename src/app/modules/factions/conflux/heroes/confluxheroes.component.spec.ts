import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfluxheroesComponent } from './confluxheroes.component';

describe('ConfluxheroesComponent', () => {
  let component: ConfluxheroesComponent;
  let fixture: ComponentFixture<ConfluxheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfluxheroesComponent]
    });
    fixture = TestBed.createComponent(ConfluxheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
