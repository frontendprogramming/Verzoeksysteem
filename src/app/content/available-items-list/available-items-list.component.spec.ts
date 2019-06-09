import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableItemsListComponent } from './available-items-list.component';

describe('AvailableItemsListComponent', () => {
  let component: AvailableItemsListComponent;
  let fixture: ComponentFixture<AvailableItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
