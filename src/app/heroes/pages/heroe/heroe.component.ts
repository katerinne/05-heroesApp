import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor(
    private activatdeRoute: ActivatedRoute
  ) {  }

  ngOnInit(): void {
    this.activatdeRoute.params
    .subscribe( ({id}) => {
      console.log( id );

    });
  }

}
