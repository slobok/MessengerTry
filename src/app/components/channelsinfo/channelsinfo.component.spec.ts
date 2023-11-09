import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelsinfoComponent } from './channelsinfo.component';

describe('ChannelsinfoComponent', () => {
  let component: ChannelsinfoComponent;
  let fixture: ComponentFixture<ChannelsinfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChannelsinfoComponent]
    });
    fixture = TestBed.createComponent(ChannelsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
