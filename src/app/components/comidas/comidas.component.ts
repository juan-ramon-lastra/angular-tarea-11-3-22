import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent {

  comidas:string[] = [
    'Sopa',
    'Pizza',
    'Arroz',
    'Hamburgusas',
    'Spaguetis',
    'Lasaña',
    'Lentejas',
    'Garbanzos'
  ];

  borrarComidas():void {
    if (this.comidas.length === 0) {
      alert("La lista de comidas esta vacia");
      return;
    }
    this.comidas = [];
  }

}
