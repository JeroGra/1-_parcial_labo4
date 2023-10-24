import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Contenedor } from 'src/app/clases/contenedor';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-borrar-container',
  templateUrl: './borrar-container.component.html',
  styleUrls: ['./borrar-container.component.css']
})
export class BorrarContainerComponent {

  @Input() container = new Contenedor;
  @Output() Estado = new EventEmitter<any>;

  estadoContainer(eliminado:boolean)
  {
    this.Estado.emit(eliminado);
  }

  constructor(private bd : BaseDatosService){}

  Eliminar()
  {
    console.log(this.container)
    this.bd.EliminarContainer(this.container.id as string);
    this.estadoContainer(true);
  }

  myAlert(){
    Swal.fire({
      title: 'Estas Seguro?',
      text: "Vas a eliminar el container seleccionado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Eliminar()
        Swal.fire({
          title:'Eliminado!',
          text:'Se elimino el container',
          icon:'success',
          timer:1000,
          showConfirmButton: false
        })
      }
    })
  }
}
