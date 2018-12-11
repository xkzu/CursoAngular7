import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( 
    activatedRoute: ActivatedRoute,
    private _heroeServeice: HeroesService
     ) {
       activatedRoute.params.subscribe( params => {
        //console.log( params['id'] );
        this.heroe = this._heroeServeice.getHeroe( params['id'] );
    })
   }

}
