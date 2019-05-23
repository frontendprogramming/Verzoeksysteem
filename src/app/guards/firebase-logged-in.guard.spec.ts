import { TestBed, async, inject } from '@angular/core/testing';

import { FirebaseLoggedInGuard } from './firebase-logged-in.guard';

describe('FirebaseLoggedInGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseLoggedInGuard]
    });
  });

  it('should ...', inject([FirebaseLoggedInGuard], (guard: FirebaseLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
