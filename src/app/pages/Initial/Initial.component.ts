import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../Carrousel/Carrousel.component';
import { GamesService } from 'src/services/games.service';

@Component({
  selector: 'app-Initial',
  templateUrl: './Initial.component.html',
  styleUrls: ['./Initial.component.scss']
})
export class InitialComponent implements OnInit {
  ListaMejoresJuegos: CarouselItem[] = [];
  listaItems: CarouselItem[] = [
  ]
  constructor(
    private serviceGames: GamesService
  ) { }

  ngOnInit() {
    this.TraerMejoresJuegos();
  }

  TraerMejoresJuegos(){
    this.serviceGames.ObtenerTopGames().subscribe(
      (games) =>{
        this.ListaMejoresJuegos = games;
        console.log('aqui estan los juegos alv: ', games);
      },
      (error) =>{
        console.error("Error al obtener los mejores juegos:", error);
      }
      );
    }
  

}
