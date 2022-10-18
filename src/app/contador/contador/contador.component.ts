import { Component } from '@angular/core'

// Decorador, se llama Component
@Component({
    selector: 'app-contador', // nombre que queremos darle al selector que luego se usa en el html
    /**
     * Este template, se usa manual, no usa ningun .html como template, y se usa para codigo MUY CORTO...
    */
    template: `
        <h1> {{ titulo }} </h1>
        <h3>La base es: <strong> {{ base }} </strong></h3>
        <div style="display: flex;align-items: center;">
            <button (click)="acumular(base)"> + {{ base }} </button>
            
            <h2>
                <span> {{ numero }} </span>
            </h2>
            
            <button (click)="acumular(-base)"> - {{ base }} </button>
        </div>
    ` 
})

/**
 * export: porque la quiero utilizar en otros lugares FUERA de este archivo
 */
export class ContadorComponent {
    titulo: string = 'Acumulador App';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}