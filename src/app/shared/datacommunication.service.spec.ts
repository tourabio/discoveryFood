import { TestBed } from '@angular/core/testing';

import { DatacommunicationService } from './datacommunication.service';

describe('DatacommunicationService', () => {
  let service: DatacommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatacommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
