// Primero importaciones de Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Primero importaciones de Terceros
/**
 * ------------------------------------------
 * ------------------------------------------
 * ------------------------------------------
 * ------------------------------------------
*/

// Primero importaciones Propias Nuestras
import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';


@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    AgregarComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // todos los servicios que se van a especificar(singletons: una unica instancia)
  providers: [
    DbzService
  ]
})
export class DbzModule { }
