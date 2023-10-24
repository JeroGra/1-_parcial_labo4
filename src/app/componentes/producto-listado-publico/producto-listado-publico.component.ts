import { Component } from '@angular/core';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';

@Component({
  selector: 'app-producto-listado-publico',
  templateUrl: './producto-listado-publico.component.html',
  styleUrls: ['./producto-listado-publico.component.css']
})
export class ProductoListadoPublicoComponent {

  arrProductos : Array<any> = []
  productos : Array<any> = []
  
  constructor(private bd : BaseDatosService){

    let sub = this.bd.TraerProductos().subscribe((obj:any)=>{
      this.productos = obj;
      for(let p of this.productos)
      {
          if(p.stock > 0)
          {
              this.arrProductos.push(p);
          }
      }
    })

  }

}
