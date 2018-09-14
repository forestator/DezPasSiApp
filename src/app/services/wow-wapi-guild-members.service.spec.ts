import { TestBed, inject } from '@angular/core/testing';

import { WowWapiGuildMembersService } from './wow-wapi-guild-members.service';

describe('WowWapiGuildMembersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WowWapiGuildMembersService]
    });
  });

  it('should be created', inject([WowWapiGuildMembersService], (service: WowWapiGuildMembersService) => {
    expect(service).toBeTruthy();
  }));
});
