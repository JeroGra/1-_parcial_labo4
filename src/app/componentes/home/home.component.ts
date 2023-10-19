import { Component } from '@angular/core';
import { ApisService } from 'src/app/servicios/apis.service';

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

constructor(private api : ApisService)
{
  this.github = this.api.TraerGitHub().subscribe((perf:any)=>{
    
    console.log(perf);
    this.perfName = perf.login;
    this.perfImg = perf.avatar_url;
    this.perfUrl = perf.html_url;
  });
}




}
