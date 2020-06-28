import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberNotificationSlowDownComponent } from './member-notification-slow-down.component';

describe('MemberNotificationSlowDownComponent', () => {
  let component: MemberNotificationSlowDownComponent;
  let fixture: ComponentFixture<MemberNotificationSlowDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberNotificationSlowDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberNotificationSlowDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
