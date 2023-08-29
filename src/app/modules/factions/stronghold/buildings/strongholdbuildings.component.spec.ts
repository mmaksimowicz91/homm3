import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongholdbuildingsComponent } from './strongholdbuildings.component';

describe('StrongholdbuildingsComponent', () => {
  let component: StrongholdbuildingsComponent;
  let fixture: ComponentFixture<StrongholdbuildingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrongholdbuildingsComponent]
    });
    fixture = TestBed.createComponent(StrongholdbuildingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
