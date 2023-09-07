import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterspellsComponent } from './waterspells.component';

describe('WaterspellsComponent', () => {
  let component: WaterspellsComponent;
  let fixture: ComponentFixture<WaterspellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterspellsComponent]
    });
    fixture = TestBed.createComponent(WaterspellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
