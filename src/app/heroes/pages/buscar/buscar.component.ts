import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  heroes: Heroe[] =[];

  constructor(private heroesSerice: HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    this.heroesSerice.getHeroes()
    .subscribe(heroes => this.heroes = heroes)

  }

}
