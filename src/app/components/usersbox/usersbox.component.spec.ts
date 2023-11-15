import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersboxComponent } from './usersbox.component';

describe('UsersboxComponent', () => {
  let component: UsersboxComponent;
  let fixture: ComponentFixture<UsersboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersboxComponent]
    });
    fixture = TestBed.createComponent(UsersboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
