import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileSelectListComponent } from './user-profile-select-list.component';

describe('UserProfileSelectListComponent', () => {
  let component: UserProfileSelectListComponent;
  let fixture: ComponentFixture<UserProfileSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
