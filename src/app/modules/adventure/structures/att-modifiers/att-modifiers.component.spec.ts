import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttModifiersComponent } from './att-modifiers.component';

describe('AttModifiersComponent', () => {
  let component: AttModifiersComponent;
  let fixture: ComponentFixture<AttModifiersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttModifiersComponent]
    });
    fixture = TestBed.createComponent(AttModifiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
