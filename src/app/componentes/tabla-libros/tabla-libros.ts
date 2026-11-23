import { Component, inject, OnInit } from '@angular/core';
import { Biblioteca } from '../../modelos/biblioteca.model';
import { BibliotecaServicio } from '../../servicios/biblioteca.service';

@Component({
  selector: 'app-tabla-libros',
  standalone: true,
  templateUrl: './tabla-libros.html'
})
export class TablaLibros implements OnInit {
  private bibliotecaServicio = inject(BibliotecaServicio);

  bibliotecas: Biblioteca[] = [];

  ngOnInit(): void {
    this.bibliotecaServicio.consultarTodas()
      .subscribe(datos => this.bibliotecas = datos);
  }
}
