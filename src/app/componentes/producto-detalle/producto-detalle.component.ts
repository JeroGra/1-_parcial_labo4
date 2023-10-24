import { Component } from '@angular/core';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent {
  arrProductos : Array<any> = []
  productoSelec:any;
  paisProd:any;
  pSelec = false;
  comestible = "Es comestible";
  constructor(private bd : BaseDatosService){

    let sub = this.bd.TraerProductos().subscribe((obj:any)=>{
      this.arrProductos = obj;
    })
  }

  ObtenerProductoSelecionada(producto:any)
  {
    this.productoSelec = producto;
    if(this.productoSelec.comestible){this.comestible = "Es comestible";}else{this.comestible = "No es comestible";}
    this.paisProd = this.productoSelec.pais;
    this.pSelec = true;
  }


}
