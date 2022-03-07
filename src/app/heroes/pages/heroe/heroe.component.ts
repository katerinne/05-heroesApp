import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activatdeRoute: ActivatedRoute,
    private heroesService: HeroesService
  ) {  }

  ngOnInit(): void {
    this.activatdeRoute.params
    .subscribe( ({id}) => {
      console.log( id );

    })
    this.activatdeRoute.params
    .pipe(
      switchMap( ({id}) => this.heroesService.getHeroePorId(id)),
      tap(console.log)
      )
      .subscribe (heroes => this.heroe = heroes);
  }

}
