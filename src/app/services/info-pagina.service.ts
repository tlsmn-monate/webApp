import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;


  constructor( private http: HttpClient) {

   // console.log('info cargada');

// Leer archivo json

    this.http.get('./assets/data/data-pages.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;

      // tslint:disable-next-line: no-string-literal
      //console.log(resp['email']);

      console.log(resp);
    })

   }
}
