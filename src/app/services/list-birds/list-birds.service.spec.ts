import { TestBed } from '@angular/core/testing';

import { ListBirdsService } from './list-birds.service';

describe('ListBirdsService', () => {
  let service: ListBirdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListBirdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
