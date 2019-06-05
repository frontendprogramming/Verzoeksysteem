import { TestBed } from '@angular/core/testing';

import { LoanedItemsService } from './loaned-items.service';

describe('LoanedItemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanedItemsService = TestBed.get(LoanedItemsService);
    expect(service).toBeTruthy();
  });
});
