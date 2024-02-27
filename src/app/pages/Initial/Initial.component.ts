import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../Carrousel/Carrousel.component';
import { GamesService } from 'src/services/games.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Initial',
  templateUrl: './Initial.component.html',
  styleUrls: ['./Initial.component.scss']
})
export class InitialComponent implements OnInit {
  ListaMejoresJuegos: CarouselItem[] = [];
  ListShooters: CarouselItem[] = [];
  listaItems: CarouselItem[] = []
  ListProximosLanzamientos: CarouselItem[] = []
  ListWorstGames: CarouselItem[] = []
  ListSports: CarouselItem[] = []
  ListMostPlayers: CarouselItem[] = []
  constructor(
    private serviceGames: GamesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.TraerMejoresJuegos();
    this.GetTopShooters();
    this.getProximosLanzamientos();
    this.getTopSports();
    this.getPeoresJuegos();
  }
  GoToPlatforms(){
    this.router.navigate(['/platforms']);
  }
  GoToStadistics(){
    this.router.navigate(['/stadistic-games']);
  }
  GoToContacts(){
    this.router.navigate(['/contacts']);
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

    GetTopShooters(){
      this.serviceGames.ObtenerTopShooters().subscribe(
        (games) =>{
          this.ListShooters = games;
          console.log('aqui estan los shooters: ', games);
        },
        (error) =>{
          console.error("Error al obtener los mejores juegos:", error);
        }
        );
    }

    getProximosLanzamientos(){
      
      this.serviceGames.ObtenerProximosLanzamientos().subscribe(
        (games) =>{
          this.ListProximosLanzamientos = games;
          console.log('aqui estan los proximos lanzamientos: ', games);
        },

        );
    }

    getTopSports(){
      this.serviceGames.ObtenerTopSports().subscribe(
        (games) =>{
          this.ListSports = games;
          console.log('aqui estan los proximos lanzamientos: ', games);
        },
        (error) =>{
          console.error("Error al obtener los mejores juegos:", error);
        }
        );
    }

    getPeoresJuegos(){
      this.serviceGames.ObtenerPeoresJuegos().subscribe(
        (games) =>{
          this.ListWorstGames = games;
          console.log('aqui estan los peores juegos: ', games);
        },
        (error) =>{
          console.error("Error al obtener los peores juegos:", error);
        }
        );
    }

}
