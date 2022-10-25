import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  // decorador de una propiedad
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  // Injectar nuestro servicio
  constructor(private DbzService: DbzService) {

  }

  // EventEmitter<Personaje>: emite un NUEVO Personaje tipo Personaje
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter()

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.DbzService.agregarPersonaje(this.nuevo);

    // Reiniciar Formulario:
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }
}
