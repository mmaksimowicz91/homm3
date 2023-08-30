import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortressheroesComponent } from './fortressheroes.component';

describe('FortressheroesComponent', () => {
  let component: FortressheroesComponent;
  let fixture: ComponentFixture<FortressheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FortressheroesComponent]
    });
    fixture = TestBed.createComponent(FortressheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
