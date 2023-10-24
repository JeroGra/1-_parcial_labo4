import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contenedor } from 'src/app/clases/contenedor';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-container',
  templateUrl: './alta-container.component.html',
  styleUrls: ['./alta-container.component.css']
})
export class AltaContainerComponent {

  public forms : FormGroup

  constructor(private bd : BaseDatosService,private fb : FormBuilder){

    this.forms = this.fb.group({
      codigo : ['',[
        Validators.required,
        Validators.minLength(5)
      ]],
      empresa : ['',[
        Validators.required,
      ]],
      capacidad : ['',[
        Validators.min(25000),
      ]],
      color : ['',[]],
    })

  }

  codigo = "";
  color:any = "#000000";
  empresa="";
  capacidad = 0;

  @Output() containerSeleccionadoevent = new EventEmitter<any>;


  Alta()
  {
    console.log(this.color)
    let container = new Contenedor
    container.codigo = this.codigo
    container.capacidad = this.capacidad
    container.color = this.color
    container.empresa = this.empresa

    this.Agregar(container);
  }

  Agregar(container:Contenedor)
  {
    this.containerSeleccionadoevent.emit(container);
    this.bd.AltaContainer(container);

    Swal.fire({
      text: 'Container dado de alta',
      showConfirmButton: false,
      timer: 1500,
      toast: true,
      position: 'top-right',
      icon:'success',
    })

    this.codigo = ""
    this.capacidad = 0
    this.color = '#000000'
    this.empresa = ""
  }

}
