import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Contenedor } from 'src/app/clases/contenedor';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-container',
  templateUrl: './modificar-container.component.html',
  styleUrls: ['./modificar-container.component.css']
})
export class ModificarContainerComponent {

  @Input() container = new Contenedor;
  @Output() Estado = new EventEmitter<any>;

  estadoContainer(modificado:boolean)
  {
    this.Estado.emit(modificado);
  }
  
  constructor(private bd : BaseDatosService){}

  Modificar()
  {
    console.log(this.container)
    this.bd.ActualizarContainer(this.container.id as string,this.container)
    this.estadoContainer(true);
  }

  myAlert()
  {
    Swal.fire({
      title: 'Estas Seguro?',
      text: "Vas a modificar el container seleccionado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Modificarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Modificar()
        Swal.fire({
          title:'Modificado!',
          text:'Se modifico el container',
          icon:'success',
          timer:1000,
          showConfirmButton: false,
        })
      }
    })
  }

}
