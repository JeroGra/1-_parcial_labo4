import { Component } from '@angular/core';
import { Contenedor } from 'src/app/clases/contenedor';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';

@Component({
  selector: 'app-abm-container',
  templateUrl: './abm-container.component.html',
  styleUrls: ['./abm-container.component.css']
})
export class AbmContainerComponent {

  ultimoAltaContainer = new Contenedor;
  arrayconteiners:Array<any> = [];
  conteinerSelec = new Contenedor;
  select = false;

  constructor(private bd: BaseDatosService){
      
      this.bd.TraerContainers().subscribe((obj:any)=>{
        this.arrayconteiners = obj;
      })

  }

  ObtenerContainerSelecionada(container:any)
  {
    this.ultimoAltaContainer = container;
    console.log(this.ultimoAltaContainer);
  }
  ObtenerConteinersSelecionadoLista(container:Contenedor)
  {
    this.conteinerSelec = container;
    console.log(this.conteinerSelec);
    this.select = true;
  }

  EstadoConatinerModifElim(estadoModifElim:any)
  {
    if(estadoModifElim)
    {
      this.select = false;
    }
  }

}
