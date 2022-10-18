import { Component } from '@angular/core';

@Component({
  // Selector: se debe poner igual el <app-root></app-root> igual en el index.html del src
  selector: 'app-root', // aplicacion principal
  /* diferencia entre 
    templateURL --> indicar el path del archivo html './anteriorCarpeta.html' / 'carpetaActual.html
    template '<span>Adrián</span>' --> template MANUAL (si es poco codigo, aunque hay gente que mete aqui todo xd)
  */
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css']
})

// Decorador importado de Component
export class AppComponent {
  
}
