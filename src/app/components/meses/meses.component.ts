import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meses',
  templateUrl: './meses.component.html',
  styleUrls: ['./meses.component.css']
})
export class MesesComponent {

  meses:string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
  ];

  borrarMes():void {
    if (this.meses.length === 0) {
      alert("No hay ningun mes para borrar");
      return;
    }
    let mes = this.meses.pop();
    //alert("Has borrado el mes de " + mes);
  }

}
