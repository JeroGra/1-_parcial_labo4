import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApisService {



  constructor(private http : HttpClient) { }


  TraerGitHub()
  {
    return this.http.get('https://api.github.com/users/JeroGra');
  }

  TraerPaises()
  {
    return this.http.get("https://restcountries.com/v3.1/all");
  }

}
