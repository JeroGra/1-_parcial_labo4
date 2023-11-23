import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-terminos',
  templateUrl: './terminos.component.html',
  styleUrls: ['./terminos.component.css']
})
export class TerminosComponent {
  public forms : FormGroup

  email:string = "";


  users:Array<Usuario> = []

  mensaje = "";
  
  acepto = false;

  constructor(private fb : FormBuilder,
    private bd : BaseDatosService,
    private route:Router){

      this.forms = this.fb.group({
        email : ['',[
          Validators.required,
          Validators.maxLength(25),
          Validators.email,
        ]],
      })

      this.bd.TraerUsuarios().subscribe((users)=>{
        this.users = users
      })

      this.bd.activado = false;
    }

    Aceptar(){
      let usado = false;
      for(let u of this.users){
        if(u.email === this.email){
          usado = true;
          break;
        }
      }
      if(usado){
        
        this.bd.activado = true;
        Swal.fire({
          text: "Operacion realizada con exito!",
          showConfirmButton: false,
          timer: 1000,
          toast: true,
          position: 'top-right',
          icon:'success',
        })
        this.route.navigateByUrl('login')
      }else{
          Swal.fire({
            text: "Email no registrado",
            showConfirmButton: false,
            timer: 1000,
            toast: true,
            position: 'top-right',
            icon:'error',
          })
      }
    }

}
