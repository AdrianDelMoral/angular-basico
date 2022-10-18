import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe', // usualmente es igual que el componente, sin la palabra Component
    templateUrl: 'heroe.component.html' // usa como template el component.hmtl
})
export class HeroeComponent {
    nombre: string = 'Capitan América';
    edad: number = 45
    
    // cuando la llame, será PROCESADA
    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad} Años`;
    }

    // cuando la llame, será PROCESADA
    cambiarNombre():void {
        this.nombre = 'Spider Man'
    }
    
    cambiarEdad():void {
        this.edad = 99
    }
}