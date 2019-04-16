import { Injectable } from '@angular/core';
import { Perro } from './modelos/perro';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritoService {

  private _favoritos=null;
  
  // private $favObserver = new BehaviorSubject(this._favoritos);
  // private _favObservable;

  constructor(private _http: HttpClient) { }

  getFavoritos():Observable<Perro[]>{
    this._http.get<Perro[]>('http://www.mocky.io/v2/5cb469e6330000b01511ba5f').subscribe(
      (datofavorito)=>{
        this._favoritos=datofavorito;
    });
    // localStorage.setItem('favoritas' ,JSON.stringify(this._favoritos));
    return this._favoritos;
  }
}
