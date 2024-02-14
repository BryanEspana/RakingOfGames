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
  gameId?: string;
  gameDetails?: any;

  constructor(
    private GamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameId = params['id'];
      this.getGameDetails();
    });
  }

  search(){
    console.log("AQUI ESTOY")
  }
  getGameDetails() {
    if (this.gameId) {
      this.GamesService.getGameDetails(this.gameId).subscribe(
        (data) => {
          this.gameDetails = data;
        },
        (error) => {
          console.error('Error fetching game details:', error);
        }
      );
    }
  }


}
