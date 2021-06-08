import { TestBed } from '@angular/core/testing';

import { ListFormationService } from './list-formation.service';

describe('ListFormationService', () => {
  let service: ListFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
