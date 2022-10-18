import { NgModule } from "@angular/core";

import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    // Componentes que tengo en la carpeta
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
})
export class ContadorModule { }
