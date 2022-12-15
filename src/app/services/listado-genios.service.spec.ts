import { TestBed } from '@angular/core/testing';

import { ListadoGeniosService } from './listado-genios.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Genio } from '../components/models/genio';

describe('ListadoGeniosService', () => {
  let service: ListadoGeniosService;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(ListadoGeniosService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created service ListadoGenios', () => {
    expect(service).toBeTruthy();
  });

  it('Deberia hacer una peticion http', (done: DoneFn) => {
    service.obtenerGenios().subscribe({
      next: (genios: Genio[]) => {
        console.log(genios);
        done();
      },
    });
  });

  xit('Verificar si el servicio si trae los 10 regitros', () => {
    expect(service.obtenerGenios.length).toBe(10);
  });
});
