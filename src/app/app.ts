import { Component } from '@angular/core';
import { FormularioBiblioteca } from './componentes/formulario-biblioteca/formulario-biblioteca';
import { TablaLibros } from './componentes/tabla-libros/tabla-libros';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormularioBiblioteca, TablaLibros],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
