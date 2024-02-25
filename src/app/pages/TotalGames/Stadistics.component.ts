import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../Carrousel/Carrousel.component';
import { GamesService } from 'src/services/games.service';

@Component({
  selector: 'app-Stadistics',
  templateUrl: './Stadistics.component.html',
  styleUrls: ['./Stadistics.component.scss']
})
export class StadisticsComponent implements OnInit {
  ListGames: CarouselItem[] = []
  searchText?: string
  constructor(
    private GamesService: GamesService
  ) { }

  ngOnInit() {
    this.GetTodosLosJuegos();
  }

  search(){
    console.log("AQUI ESTOY")
  }


  GetTodosLosJuegos(){
    
    this.GamesService.ObtenerTodosLosJuegos().subscribe(
      (data) => {
        this.ListGames = data
        console.log("listGames", data);
      },
      (error) => {
        console.error("Error al obtener los juegos", error)
      }
    )
  }
}
