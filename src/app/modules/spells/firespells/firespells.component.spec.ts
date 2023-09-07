import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirespellsComponent } from './firespells.component';

describe('FirespellsComponent', () => {
  let component: FirespellsComponent;
  let fixture: ComponentFixture<FirespellsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FirespellsComponent]
    });
    fixture = TestBed.createComponent(FirespellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
