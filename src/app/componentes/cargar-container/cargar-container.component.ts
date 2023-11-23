import { Component } from '@angular/core';
import { Contenedor } from 'src/app/clases/contenedor';
import { Producto } from 'src/app/clases/producto';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-cargar-container',
  templateUrl: './cargar-container.component.html',
  styleUrls: ['./cargar-container.component.css']
})
export class CargarContainerComponent {

  arrayconteiners : Array<Contenedor> = [];
  arrProductos : Array<Producto> = [];
  conteinerSelec : Contenedor = new Contenedor;
  productoSelec : Producto = new  Producto;
  select = false;
  paisProd:any;
  pSelec = false;
  comestible = "Es comestible";
  selectContainer = true;
  selectProducto = false;
  cantidad = 0

  constructor(private bd: BaseDatosService){
    this.bd.TraerContainers().subscribe((obj:any)=>{
      this.arrayconteiners = obj;
    })
    this.bd.TraerProductos().subscribe((obj:any)=>{
      this.arrProductos = obj;
    })
  }


  ObtenerConteinersSelecionadoLista(container:Contenedor)
  {
    this.conteinerSelec = container;
    console.log(this.conteinerSelec);
    this.select = true;
    this.selectContainer = false
    this.selectProducto = true;
  }

  ObtenerProductoSelecionada(producto:any)
  {
    this.productoSelec = producto;
    if(this.productoSelec.comestible){this.comestible = "Es comestible";}else{this.comestible = "No es comestible";}
    this.paisProd = this.productoSelec.pais;
    this.pSelec = true;
    this.selectProducto = false;
  }

  ListaCont(){
    this.selectContainer = true;
    this.selectProducto = false;
    this.select = false;
  }

  ListaProd(){

    this.selectProducto = true;
  }

  CargarContainer(){

    if(this.ValidarStock()){
      if(this.ValidarCapacidad()){

        let cont = 0

        let miProd = new Producto;
        miProd.id = this.productoSelec.id;
        miProd.codigo = this.productoSelec.codigo;
        miProd.comestible = this.productoSelec.comestible;
        miProd.descripcion = this.productoSelec.descripcion;
        miProd.pais = this.productoSelec.pais;
        miProd.precio = this.productoSelec.precio;
  


        cont = this.productoSelec.stock as number
        cont -= this.cantidad
        this.productoSelec.stock = cont ;

        miProd.stock = this.cantidad;
        this.conteinerSelec.productos.push(miProd);

        cont = this.conteinerSelec.capacidad as number
        cont -= this.cantidad
        this.conteinerSelec.capacidad = cont ;
        
        this.bd.ActualizarContainer(this.conteinerSelec.id as string,this.conteinerSelec)
        this.bd.ActualizarProducto(this.productoSelec.id as string,this.productoSelec)
        Swal.fire({
          text: "Producto Cargado! ",
          showConfirmButton: false,
          timer: 1000,
          toast: true,
          position: 'top-right',
          icon:'success',
        })

        this.selectContainer = true;
        this.selectProducto = false;
        this.conteinerSelec = new Contenedor;
        this.productoSelec = new Producto;

      }
    }
  }

  ValidarStock(){
    let rt = false;
    if(this.productoSelec.stock as number >= this.cantidad){
      rt = true;
    }else{
      Swal.fire({
        text: "No hay stock suficiente, Seleccione menos cantidad",
        showConfirmButton: false,
        timer: 1000,
        toast: true,
        position: 'top-right',
        icon:'error',
      })
    }

    return rt
  }

  ValidarCapacidad(){

    let rt = false;

    if(this.conteinerSelec.capacidad as number >= this.cantidad){
      rt = true;
    }else{
      Swal.fire({
        text: "No hay capacidad suficinete, seleccione menos cantidad",
        showConfirmButton: false,
        timer: 1000,
        toast: true,
        position: 'top-right',
        icon:'error',
      })
    }

    return rt;
  }


}
