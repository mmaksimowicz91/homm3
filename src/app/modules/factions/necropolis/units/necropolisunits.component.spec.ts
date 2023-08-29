import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NecropolisunitsComponent } from './necropolisunits.component';

describe('NecropolisunitsComponent', () => {
  let component: NecropolisunitsComponent;
  let fixture: ComponentFixture<NecropolisunitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NecropolisunitsComponent]
    });
    fixture = TestBed.createComponent(NecropolisunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
