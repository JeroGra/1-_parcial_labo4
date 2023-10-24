import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  paisSelec:any;

  mensaje = ""
  paiseInvalido = false;

  
  public forms : FormGroup

  constructor(private apis :ApisService,private fb : FormBuilder, private bd : BaseDatosService, private ruta : Router){

    const rtPaises = this.apis.TraerPaises();
    const sub = rtPaises.subscribe((rt)=>{

      let paises = rt as Array<any>;
      let misPaises :  Array<any>= [] 

      for(let p of paises)
      {
        if(p.continents[0] === 'South America')
        {
          misPaises.push(p)
        }
      }
      console.log(misPaises);
      for(let i = misPaises.length;i>3;i--)
      {
        misPaises.pop()
      }

      this.arrayPaises = misPaises as Array<any>;
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
        Validators.min(1),
      ]],
      stock : ['',[
        Validators.min(1),
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

  ObtenerPaisSelecionada(pais:any)
  {
    this.pais = pais.name.common
    this.paisSelec = pais;
  }
  Agregar()
  {
    if(this.PaisValidator())
    {
      let prod = {
        pais:this.paisSelec,
        codigo:this.codigo,
        descripcion:this.descripcion,
        precio: this.precio, 
        stock: this.stock,
        comestible:this.comestible
      }
  
      this.bd.AltaProducto(prod)
      this.mensaje = "Producto dado de Alta"

      setTimeout(()=>{
        this.mensaje = "";
        this.codigo = ""
        this.pais =""
        this.descripcion = ""
        this.precio = 0
        this.stock = 0
        this.ruta.navigateByUrl('productoDetalle');

      },1000)
    }
    else
    {
      this.paiseInvalido = true;
      this.mensaje = "Erro! Verfique los campos"
      setTimeout(()=>{this.mensaje = ""},1000)
    }
    
  }

private PaisValidator()
  {
      let equal = false;

        for(let p of this.arrayPaises)
        {
            if(this.pais === p.name.common )
            {
              equal = true;
              break;
            }
        }
      
      if(equal)
      {
        return true
      }else{
        return false
      }
  }

}
