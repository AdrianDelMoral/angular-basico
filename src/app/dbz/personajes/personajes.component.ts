import { Component, Input } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {
  
  // decorador de una propiedad
  // @Input() personajes: Personaje[] = []; // Personaje viene de la interfaz dbz.interface.ts
  get personajes() {
    return this.dbzService.personajes;
  }

  constructor(private dbzService: DbzService) { }
}
