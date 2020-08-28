import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pages.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;
  equipo: any[] = [];


  constructor( private http: HttpClient) {

this.cargarInfo();
this.cargarEquipo();
   // console.log('info cargada');

  // Leer archivo json


   }
private cargarInfo(){
  this.http.get('./assets/data/data-pages.json')
  .subscribe( (resp: InfoPagina) => {
    this.cargada = true;
    this.info = resp;

    // tslint:disable-next-line: no-string-literal
    //console.log(resp['email']);

  });
}

private cargarEquipo(){

  this.http.get('https://angular-html-2bae6.firebaseio.com/equipo.json')
  .subscribe( (resp: any) => {
    this.equipo = resp;
   

    // tslint:disable-next-line: no-string-literal
    //console.log(resp['email']);

    //console.log(resp);
  });


}

}
