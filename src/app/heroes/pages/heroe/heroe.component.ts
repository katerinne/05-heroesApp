import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../service/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activatdeRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
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

  regresar(){
    this.router.navigate(['heroes/listado']);
  }

}
