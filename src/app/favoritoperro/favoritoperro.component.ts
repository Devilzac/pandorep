import { Component, OnInit } from '@angular/core';
import { FavoritoService } from '../favorito.service';

@Component({
  selector: 'app-favoritoperro',
  templateUrl: './favoritoperro.component.html',
  styleUrls: ['./favoritoperro.component.scss']
})
export class FavoritoperroComponent implements OnInit {

  fav=null;
  constructor(private _favSer:FavoritoService) { }

  ngOnInit() {
    this._favSer.getFavoritos().subscribe((datosfav)=>
    {
      this.fav=datosfav;
    })
  }

}
