import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleHeroesComponent } from './castleheroes.component';

describe('CastleHeroesComponent', () => {
  let component: CastleHeroesComponent;
  let fixture: ComponentFixture<CastleHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CastleHeroesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CastleHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
