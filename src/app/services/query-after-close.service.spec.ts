import { TestBed } from '@angular/core/testing';

import { QueryAfterCloseService } from './query-after-close.service';

describe('QueryAfterCloseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QueryAfterCloseService = TestBed.get(QueryAfterCloseService);
    expect(service).toBeTruthy();
  });
});
