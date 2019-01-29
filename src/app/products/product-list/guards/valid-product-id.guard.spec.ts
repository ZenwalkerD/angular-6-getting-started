import { TestBed, async, inject } from '@angular/core/testing';

import { ValidProductIdGuard } from './valid-product-id.guard';

describe('ValidProductIdGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidProductIdGuard]
    });
  });

  it('should ...', inject([ValidProductIdGuard], (guard: ValidProductIdGuard) => {
    expect(guard).toBeTruthy();
  }));
});
