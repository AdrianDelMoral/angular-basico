import { Injectable } from '@angular/core'
import { Personaje } from '../interfaces/dbz.interface';

// Servicio DbzService
@Injectable()
export class DbzService {

    // Propiedades
    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegetta',
            poder: 7500
        }
    ];

    // Getters y Setters
    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    // Constructor
    constructor() { }

    // Metodos:
    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}