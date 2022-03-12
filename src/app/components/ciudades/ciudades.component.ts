import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent {

  ciudades:string[] = [
    'Oviedo',
    'León',
    'Madrid',
    'Barcelona',
    'Valencia',
    'Zaragoza'
  ];

  ciudadesBorradas:string[] = [];
  visible:boolean = false;

  mostrarCiudades():void {
    this.visible = true;
  }

  borrarCiudad():void {
    if (this.ciudades.length === 0) {
      alert("No hay ninguna ciudad para borrar");
      return;
    }
    let ciudad:string = this.ciudades.pop()!;
    this.ciudadesBorradas.push(ciudad);
  }

}
