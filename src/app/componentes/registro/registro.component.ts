import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  public forms : FormGroup

  email:string = "";
  pass:string  = "";
  nombre = "";
  apellido = "";
  edad = 18;
  dni = 0;
  

  users:Array<Usuario> = []

  mensaje = "";
  

  minL = 5;

  constructor(private fb : FormBuilder,
    private bd : BaseDatosService,
    private route:Router){

      this.forms = this.fb.group({
        email : ['',[
          Validators.required,
          Validators.maxLength(25),
          Validators.email,
        ]],
        pass : ['',[
          Validators.required,
          Validators.minLength(this.minL),
        ]],
        nombre : ['',[
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
        ]],
        apellido : ['',[
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15),
        ]],
        edad : ['',[

        ]],
        dni : ['',[

        ]],
      })

      this.bd.TraerUsuarios().subscribe((users)=>{
        this.users = users
      })

    }


  Registrar()
  {

    if(this.edad >= 18){
      if(this.dni >= 4444444 || this.dni <= 99999999){
        let usado = false;
        for(let u of this.users){
          if(u.email === this.email){
            usado = true;
            break;
          }
        }
        if(!usado){
    
          let usuario = new Usuario
          usuario.nombre = this.nombre
          usuario.apellido = this.apellido
          usuario.dni = this.dni;
          usuario.pass = this.pass;
          usuario.email = this.email;
          usuario.rol = "empleado"
    
          this.bd.AltaUsuario(usuario)
    
          Swal.fire({
            text: "Registrando ",
            showConfirmButton: false,
            timer: 1000,
            toast: true,
            position: 'top-right',
            icon:'success',
          })
          this.route.navigateByUrl('terminos')
        }else{
    
          Swal.fire({
            text: "Email ya utilizado, seleccione otro",
            showConfirmButton: false,
            timer: 1000,
            toast: true,
            position: 'top-right',
            icon:'error',
          })
    
        }

      }else{          Swal.fire({
        text: "Coloque un DNI valido",
        showConfirmButton: false,
        timer: 1000,
        toast: true,
        position: 'top-right',
        icon:'error',
      })}

    }else{          Swal.fire({
      text: "Coloque una edad mayor o igual a 18",
      showConfirmButton: false,
      timer: 1000,
      toast: true,
      position: 'top-right',
      icon:'error',
    })}

  }

  IngresoAdmin()
  {
      this.email = "admin@gmail.com"
      this.pass = "admin123"
  }

  IngresoEmpleado()
  {
    this.email = "empleado@gmail.com"
    this.pass = "empleado123"
  }
}
