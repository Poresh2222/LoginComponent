import { TestBed } from '@angular/core/testing';

import { RegistrationFieldsService } from './registration-fields.service';

describe('RegistrationFieldsService', () => {
  let service: RegistrationFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrationFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
