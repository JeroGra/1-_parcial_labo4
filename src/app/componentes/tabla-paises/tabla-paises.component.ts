import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent {
  @Input() paises : Array<any> = [] 
  @Output() PaisSeleccionadoevent = new EventEmitter<any>;
  select(pais:any)
  {
    this.PaisSeleccionadoevent.emit(pais);
  }
}
