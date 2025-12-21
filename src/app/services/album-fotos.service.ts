import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foto } from '../interfaces/foto';
import { environment } from 'src/environments/environment';
import { delay, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumFotosService {
  enderecoAPI = environment.apiURL;

  constructor(private http: HttpClient) {}

  getFotos(): Observable<Foto[]> {
    return this.http
      .get<Foto[]>(`${this.enderecoAPI}/photos`)
      .pipe(
        map((fotos) => {
          return fotos.map((foto) => {
            return { ...foto, description: foto.description.toUpperCase() };
          });
        })
      )
      .pipe(tap((fotos) => console.log(fotos)))
      .pipe(delay(2000));
  }
}
