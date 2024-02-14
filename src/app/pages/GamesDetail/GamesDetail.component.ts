import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../Carrousel/Carrousel.component';
import { GamesService } from 'src/services/games.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-TotalGames',
  templateUrl: './GamesDetail.component.html',
  styleUrls: ['./GamesDetail.component.scss']
})
export class GamesDetailComponent implements OnInit {
  shortScreenshots: any[] = [];
  responsiveOptions: any[] | undefined;
  ratingGame: number = 5; 
  gameId: string | null = null;
  gameDetails: any = {};
  stars: number[] = [1, 2, 3, 4, 5]; // Representa un arreglo de 5 estrellas
  Divinfo: any;
  
  constructor(
    private GamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5
      },
      {
          breakpoint: '768px',
          numVisible: 3
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];
    this.gameId = this.route.snapshot.paramMap.get('id');
    console.log("GameId: " + this.gameId);
    if (this.gameId) {
      this.getGameDetails(this.gameId);
      console.log("GameDetails: " + this.gameDetails);
    }
    console.log("Si trae la data", JSON.stringify(this.gameDetails));
  }

  search(){
    console.log("AQUI ESTOY")
  }
  getGameDetails(gameId: string) {
    this.GamesService.getGameDetails(gameId).subscribe(
      (gameDetails) => {
        this.gameDetails = gameDetails;
        this.shortScreenshots = this.gameDetails.short_screenshots;
        this.ratingGame = this.gameDetails.rating;
        console.log("GameDetails:", this.gameDetails); // Ahora dentro del subscribe
      },
      (error) => {
        console.error('Error al obtener los detalles del juego:', error);
      }
    );
  }
  
  


}
