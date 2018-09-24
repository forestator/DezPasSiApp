import { TestBed, inject } from '@angular/core/testing';

import { SpeBisListService } from './spe-bis-list.service';

describe('SpeBisListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpeBisListService]
    });
  });

  it('should be created', inject([SpeBisListService], (service: SpeBisListService) => {
    expect(service).toBeTruthy();
  }));
});
