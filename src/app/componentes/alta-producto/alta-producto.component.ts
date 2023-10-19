import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/servicios/apis.service';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent {

  arrayPaises : Array<any> = []

  codigo=""
  descripcion=""
  precio = 0
  stock= 0
  pais=""
  comestible=false;
  paisSelec:string = ""

  mensaje = ""

  
  public forms : FormGroup

  constructor(private apis :ApisService,private fb : FormBuilder, private bd : BaseDatosService, private ruta : Router){

    const rtPaises = this.apis.TraerPaises();
    const sub = rtPaises.subscribe((rt)=>{

      console.log(rt);
     let paises = rt as Array<any>;
      for(let i = paises.length; i > 3;i--)
      {
        let rt = paises.pop();
      }

      this.arrayPaises = paises as Array<any>;
      console.log(this.arrayPaises);
    })

    this.forms = this.fb.group({
      codigo : ['',[
        Validators.required,

      ]],
      descripcion : ['',[
        Validators.required,
      ]],
      precio : ['',[
        Validators.required,
      ]],
      stock : ['',[
        Validators.required,
      ]],
      pais : ['',[
        Validators.required,
      ]],
    })


  }

  Comestible(bool:boolean)
  {
    this.comestible = bool;
  }

  Agregar()
  {


      let prod = {
        pais:this.pais,
        codigo:this.codigo,
        descripcion:this.descripcion,
        precio: this.precio, 
        stock: this.stock,
        comestible:this.comestible
      }

      this.bd.AltaProducto(prod)
      this.mensaje = "Producto dado de Alta"
      this.codigo = ""
      this.pais =""
      this.descripcion = ""
      this.precio = 0
      this.stock = 0
  }

}
