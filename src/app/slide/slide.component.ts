import { Component, OnInit } from '@angular/core';
import { SlideService } from '../slide.service';

@Component({
  selector: 'slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
slide=null;
  constructor(private _perroServ:SlideService) { }

  ngOnInit() {
    this._perroServ.getPerros().subscribe((datosperros)=>{
      this.slide=datosperros;
    });
  }
  addfav(){
    
  }

}
