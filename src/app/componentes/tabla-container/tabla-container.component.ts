import { Component, Input,Output,EventEmitter } from '@angular/core';
import { Contenedor } from 'src/app/clases/contenedor';

@Component({
  selector: 'app-tabla-container',
  templateUrl: './tabla-container.component.html',
  styleUrls: ['./tabla-container.component.css']
})
export class TablaContainerComponent {
  @Input() containers : Array<any> = []
  @Output() containerSeleccionadoevent = new EventEmitter<any>;

  select(container:Contenedor)
  {
    this.containerSeleccionadoevent.emit(container);
  }
}
