import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BibliotecaServicio } from '../../servicios/biblioteca.service';

@Component({
  selector: 'app-formulario-biblioteca',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-biblioteca.html'
})
export class FormularioBiblioteca {
  private constructorFormularios = inject(FormBuilder);
  private bibliotecaServicio = inject(BibliotecaServicio);

  formulario = this.constructorFormularios.nonNullable.group({
    nombre: ['', Validators.required],
    direccion: ['', Validators.required],
    ciudad: ['', Validators.required]
  });

  registrar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.bibliotecaServicio.registrar(this.formulario.getRawValue())
      .subscribe(() => this.formulario.reset());
  }
}
