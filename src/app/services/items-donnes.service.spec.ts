import { TestBed, inject } from '@angular/core/testing';

import { ItemsDonnesService } from './items-donnes.service';

describe('ItemsDonnesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsDonnesService]
    });
  });

  it('should be created', inject([ItemsDonnesService], (service: ItemsDonnesService) => {
    expect(service).toBeTruthy();
  }));
});
