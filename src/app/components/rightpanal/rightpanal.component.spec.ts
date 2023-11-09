import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightpanalComponent } from './rightpanal.component';

describe('RightpanalComponent', () => {
  let component: RightpanalComponent;
  let fixture: ComponentFixture<RightpanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightpanalComponent]
    });
    fixture = TestBed.createComponent(RightpanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
