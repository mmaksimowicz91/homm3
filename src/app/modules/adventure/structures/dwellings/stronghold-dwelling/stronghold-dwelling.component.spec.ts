import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrongholdDwellingComponent } from './stronghold-dwelling.component';

describe('StrongholdDwellingComponent', () => {
  let component: StrongholdDwellingComponent;
  let fixture: ComponentFixture<StrongholdDwellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrongholdDwellingComponent]
    });
    fixture = TestBed.createComponent(StrongholdDwellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
