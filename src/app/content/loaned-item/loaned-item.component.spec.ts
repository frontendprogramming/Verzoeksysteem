import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanedItemComponent } from './loaned-item.component';

describe('LoanedItemComponent', () => {
  let component: LoanedItemComponent;
  let fixture: ComponentFixture<LoanedItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanedItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanedItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
