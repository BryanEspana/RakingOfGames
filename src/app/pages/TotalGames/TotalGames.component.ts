import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../Carrousel/Carrousel.component';
import { GamesService } from 'src/services/games.service';

@Component({
  selector: 'app-TotalGames',
  templateUrl: './TotalGames.component.html',
  styleUrls: ['./TotalGames.component.scss']
})
export class TotalGamesComponent implements OnInit {
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
