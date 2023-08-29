import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RampartHeroesComponent } from './rampartheroes.component';

describe('RampartheroesComponent', () => {
  let component: RampartHeroesComponent;
  let fixture: ComponentFixture<RampartHeroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RampartHeroesComponent],
    });
    fixture = TestBed.createComponent(RampartHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
