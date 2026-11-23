import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Biblioteca, NuevaBiblioteca } from '../modelos/biblioteca.model';

@Injectable({ providedIn: 'root' })
export class BibliotecaServicio {
  private clienteHttp = inject(HttpClient);

  consultarTodas(): Observable<Biblioteca[]> {
    return this.clienteHttp.get<Biblioteca[]>('/bibliotecas');
  }

  registrar(biblioteca: NuevaBiblioteca): Observable<Biblioteca> {
    return this.clienteHttp.post<Biblioteca>('/bibliotecas', biblioteca);
  }
}
