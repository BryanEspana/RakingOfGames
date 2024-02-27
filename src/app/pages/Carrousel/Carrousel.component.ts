import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


export interface CarouselItem {
 //_id opcional
  _id: string;
  games?:any[];
  name: string;
  genre: string; // Cambiado a 'genre' para reflejar que solo se mostrará un género
  image: string;
  rating: number;
}


@Component({
  selector: 'app-Carrousel',
  templateUrl: './Carrousel.component.html',
  styleUrls: ['./Carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {
  
  @Input() items: CarouselItem[] = [];
  @ViewChild('carousel') carousel?: ElementRef<HTMLDivElement>;

  constructor(
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  scrollLeft() {
    this.carousel?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.carousel?.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }

  GoToGame(gameId: string) {
    console.log("Navigating to game with ID:", gameId); // Añade esto para debuggear
    this.route.navigate(['/games', gameId]);
  }
  
}
