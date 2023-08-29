import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongholdunitsComponent } from './strongholdunits.component';

describe('StrongholdunitsComponent', () => {
  let component: StrongholdunitsComponent;
  let fixture: ComponentFixture<StrongholdunitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrongholdunitsComponent]
    });
    fixture = TestBed.createComponent(StrongholdunitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
