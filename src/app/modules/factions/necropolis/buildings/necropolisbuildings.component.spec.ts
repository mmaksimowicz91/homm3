import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecropolisbuildingsComponent } from './necropolisbuildings.component';

describe('NecropolisbuildingsComponent', () => {
  let component: NecropolisbuildingsComponent;
  let fixture: ComponentFixture<NecropolisbuildingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NecropolisbuildingsComponent]
    });
    fixture = TestBed.createComponent(NecropolisbuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
