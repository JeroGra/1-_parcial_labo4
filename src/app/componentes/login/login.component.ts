import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public forms : FormGroup

  email:string = "";
  pass:string  = "";

  user:any

  mensaje = "";
  
  users:any = []

  minL = 5;

  constructor(private fb : FormBuilder,
    private bd : BaseDatosService,
    private route:Router){

      this.forms = this.fb.group({
        email : ['',[
          Validators.required,
          Validators.maxLength(15),
          Validators.email,
        ]],
        pass : ['',[
          Validators.required,
          Validators.minLength(this.minL),
        ]],
      })

      this.bd.TraerUsers();
      console.log(this.bd.usuarios)
    }


  inicioSesion()
  {
    console.log(this.pass)
    let log = false;

      for(let user of this.bd.usuarios){
        console.log(user)

        if(this.email == user.email && this.pass == user.pass)
        {
            this.user = user;
            log = true;
            break;
        }

      };

      if(log)
      {

        this.mensaje = "Bienvenido/a! "+this.user.nombre + " " + this.user.rol
        this.bd.logIn(this.user);
        setTimeout(()=>{
          this.mensaje = "";
          this.route.navigateByUrl('home');
        },1000)
        
      }
      else
      {
        this.mensaje = "Error, usuario invalido"
        setTimeout(() => {
          this.mensaje = ""
        }, 1000);
      }

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
