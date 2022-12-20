import { TestBed } from '@angular/core/testing';

import { NewspaperService } from './newspaper.service';

describe('NewspaperService', () => {
  let service: NewspaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewspaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
