import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RampartBuildingsComponent } from './rampartbuildings.component';

describe('RampartBuildingsComponent', () => {
  let component: RampartBuildingsComponent;
  let fixture: ComponentFixture<RampartBuildingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RampartBuildingsComponent],
    });
    fixture = TestBed.createComponent(RampartBuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
