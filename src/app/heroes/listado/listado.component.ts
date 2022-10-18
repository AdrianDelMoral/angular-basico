import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = ['Spider Man', 'Iron Man', 'Captain America', 'Thor', 'Ojo de Halcón', 'Black Panther', 'Viuda Negra', 'Ant-Man', 'Bruja Escarlata', 'Vision', 'Doctor Strange', 'Caballero Luna', 'Winter Soldier', 'Falcon', 'Wasp', 'Mercurio', 'Wonder Man', 'Ms. Marvel', 'Hulka', 'Starfox'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}


