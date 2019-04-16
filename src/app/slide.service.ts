import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Perro } from '../app/modelos/perro';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  private _perros; 
  
  //Ejemplo observable
  //private $perrosObserver = new BehaviorSubject(this._perros);
  //private _perrosObservable;

  constructor(
      private _http: HttpClient
  ) { }



  getPerros():Observable<Perro[]>{
   // this._perrosObservable = this.$perrosObserver.asObservable();
    this._perros = this._http.get<Perro[]>('http://www.mocky.io/v2/5cb469e6330000b01511ba5f');
    localStorage.setItem('perros' ,JSON.stringify(this._perros))
    //Ejemplo observable
    // this._perrosObservable = this._http.get<Perro[]>('http://www.mocky.io/v2/5cb469e6330000b01511ba5f').subscribe(
    //   data =>{
    //     this._perros = data;
    //     this.$perrosObserver.next(this._perros);
    //   }
    // );

    return this._perros;
  }



}

