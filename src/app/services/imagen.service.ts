import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImagenService {
  private error$ = new Subject<string>();
  private terminoBusqueda$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  setError(mensaje: string) {
    this.error$.next(mensaje);
  }

  getError(): Observable<string> {
    return this.error$.asObservable();
  }

  enviarTerminoBusqueda(termino: string) {
    this.terminoBusqueda$.next(termino);
  }

  getTerminoBusqueda(): Observable<string> {
    return this.terminoBusqueda$.asObservable();
  }

  getImagenes(
    termino: string,
    imagenPorPagina: number,
    paginaActual: number
  ): Observable<any> {
    const KEY = '21514002-a1530340cb638c2dd55054861';
    const URL =
      'https://pixabay.com/api/?key=' +
      KEY +
      '&q=' +
      termino +
      '&per_pgae=' +
      imagenPorPagina +
      '&page=' +
      paginaActual;
    return this.http.get(URL);
  }
}
