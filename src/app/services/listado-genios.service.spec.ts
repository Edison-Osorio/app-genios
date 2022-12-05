import { TestBed } from '@angular/core/testing';

import { ListadoGeniosService } from './listado-genios.service';

describe('ListadoGeniosService', () => {
  let service: ListadoGeniosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoGeniosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
