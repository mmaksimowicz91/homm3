import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongholdheroesComponent } from './strongholdheroes.component';

describe('StrongholdheroesComponent', () => {
  let component: StrongholdheroesComponent;
  let fixture: ComponentFixture<StrongholdheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrongholdheroesComponent]
    });
    fixture = TestBed.createComponent(StrongholdheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
