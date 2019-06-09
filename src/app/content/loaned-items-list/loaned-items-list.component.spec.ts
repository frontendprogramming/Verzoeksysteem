import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanedItemsListComponent } from './loaned-items-list.component';

describe('LoanedItemsListComponent', () => {
  let component: LoanedItemsListComponent;
  let fixture: ComponentFixture<LoanedItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanedItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanedItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
