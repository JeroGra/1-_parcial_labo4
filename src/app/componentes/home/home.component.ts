import { Component } from '@angular/core';
import { isEmpty } from 'rxjs';
import { ApisService } from 'src/app/servicios/apis.service';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

github:any
perfName = "";
perfImg = "";
perfUrl = "";
logeado = "";

constructor(private api : ApisService, public log : BaseDatosService)
{
  this.github = this.api.TraerGitHub().subscribe((perf:any)=>{
    
    console.log(perf);
    this.perfName = perf.login;
    this.perfImg = perf.avatar_url;
    this.perfUrl = perf.html_url;
    if(this.log.userLog != null)
    {
        this.logeado = this.log.userLog.nombre + ", " + "rol: '"+ this.log.userLog.rol+"'"; 
    } 

  });
}




}
