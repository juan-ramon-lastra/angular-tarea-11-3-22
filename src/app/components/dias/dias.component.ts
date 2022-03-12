import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css']
})
export class DiasComponent {

  dias:string[] = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
  ];

  borrarDia():void {
    if (this.dias.length === 0) {
      alert("No hay ningun dia para borrar");
      return;
    }
    let dia = this.dias.shift();
    //alert("Has borrado el dia de " + dia);
  }

}
