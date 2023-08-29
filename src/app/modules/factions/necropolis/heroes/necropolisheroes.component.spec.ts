import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecropolisheroesComponent } from './necropolisheroes.component';

describe('NecropolisheroesComponent', () => {
  let component: NecropolisheroesComponent;
  let fixture: ComponentFixture<NecropolisheroesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NecropolisheroesComponent]
    });
    fixture = TestBed.createComponent(NecropolisheroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
