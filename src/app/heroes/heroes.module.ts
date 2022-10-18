import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Componentes que tengo en la carpeta
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    imports: [
        /**
         * Sirve: para que no de errores a la hora de usar ngIf / ngFor o cosas que usa angular en html
         * Hace: que se puedan usar cosas de angular en HTML como ngFor / ngIf
         */ 
        CommonModule 
    ]
})
export class HeroesModule {
    
}