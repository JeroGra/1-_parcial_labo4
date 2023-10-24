import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent {
  @Input() productos : Array<any> = []
  @Input() public : boolean = false; 
  @Output() ProductoSeleccionadoevent = new EventEmitter<any>;

  select(producto:any)
  {
    this.ProductoSeleccionadoevent.emit(producto);
  }
}
