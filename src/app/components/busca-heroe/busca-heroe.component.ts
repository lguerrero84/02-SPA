import { Component, OnInit } from '@angular/core';
import {HeroesService , Heroe} from '../../Services/heroes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-busca-heroe',
  templateUrl: './busca-heroe.component.html'
})

export class BuscaHeroeComponent implements OnInit {

  heroes: Heroe [] = [];
  termino: string;

  constructor( private _heroesService: HeroesService,
               private activatedRouter: ActivatedRoute,  
               private router: Router  
            ){ 
              this.activatedRouter.params.subscribe( params => {
                this.termino = params['termino'];
                this.heroes = this._heroesService.buscarHeroes(params['termino']);
              });
              
              
        }

  ngOnInit() {
  }
  
  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx]);
  }

}
