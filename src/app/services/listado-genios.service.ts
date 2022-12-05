import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Genio } from '../components/models/genio';

@Injectable({
  providedIn: 'root',
})
export class ListadoGeniosService {
  private readonly urlEndPoint =
    'https://apps.coopsana.co:8766/api-prueba-tecnica-coopsana/desarrollo-tecnologico/genios';

  private httHeaders = new HttpHeaders({
    user: 'andres.velez',
    pass: 'coopsana',
  });

  constructor(private readonly http: HttpClient) {}

  obtenerGenios(): Observable<Genio[]> {
    return this.http.get(this.urlEndPoint, { headers: this.httHeaders }).pipe(
      map((response: any) => {
        let genios: any = response.genios as Genio[];
        genios[0].photo = genios[0]['photo-url'];
        delete genios[0]['photo-url'];
        return genios;
      })
    );
  }
}
