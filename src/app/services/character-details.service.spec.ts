import { TestBed, inject } from '@angular/core/testing';

import { CharacterDetailsService } from './character-details.service';

describe('CharacterDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterDetailsService]
    });
  });

  it('should be created', inject([CharacterDetailsService], (service: CharacterDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
