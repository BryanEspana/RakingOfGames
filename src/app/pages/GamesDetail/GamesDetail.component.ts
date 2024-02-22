import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../Carrousel/Carrousel.component';
import { GamesService } from 'src/services/games.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from 'src/services/Comments/Comments.service';


// comentario.model.ts
export interface Comentario {
  gameId?: string;
  title: string;
  description: string;
  rating: number;
  // Agrega cualquier otro campo que necesites
}

@Component({
  selector: 'app-TotalGames',
  templateUrl: './GamesDetail.component.html',
  styleUrls: ['./GamesDetail.component.scss']
})
export class GamesDetailComponent implements OnInit {
  shortScreenshots: any[] = [];
  responsiveOptions: any[] | undefined;
  ratingGame: number = 5;
  ListProximosLanzamientos: CarouselItem[] = []
 
  gameId: string = '';
  gameDetails: any = {};
  stars: number[] = [1, 2, 3, 4, 5]; // Representa un arreglo de 5 estrellas
  Divinfo: any;
  comentario:  Comentario ={
    title: '',
    description: '',
    rating: 0
  };
  comentarios: Comentario[] = [

  ];
  constructor(
    private GamesService: GamesService,
    private route: ActivatedRoute,
    private router: Router,
    private CommentService: CommentsService,
    
  ) { }

  ngOnInit() {
    this.getComments();
    this.getProximosLanzamientos();

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
    this.gameId = this.route.snapshot.paramMap.get('id')!;
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
  
  getProximosLanzamientos(){
      
    this.GamesService.ObtenerProximosLanzamientos().subscribe(
      (games) =>{
        this.ListProximosLanzamientos = games;
        console.log('aqui estan los proximos lanzamientos: ', games);
      },

      );
  }


  getComments(){
    this.gameId = this.route.snapshot.paramMap.get('id')!;
    console.log("Entra el gameid?: ", this.gameId);
    this.CommentService.getComments(this.gameId).subscribe(
      (comments) => {
        this.comentarios = comments;
        console.log('Comentarios:', this.comentarios);
      },
      (error) => {
        console.error('Error al obtener los comentarios:', error);
      }
    );
  }

  addComments(){
    this.gameId = this.route.snapshot.paramMap.get('id')!;
    this.comentario.rating = this.ratingGame;
    console.log("Comentario a enviar: ", this.comentario);
    this.CommentService.addComment(this.comentario).subscribe(
      (comment) => {
        console.log('Comentario enviado:', comment);
        this.getComments();
      },
      (error) => {
        console.error('Error al enviar el comentario:', error);
      }
    );
  }

  submitComment(){
    if (this.comentario.title && this.comentario.description && this.comentario.rating) {
      this.gameId = this.route.snapshot.paramMap.get('id')!;
      this.comentario.gameId = this.gameId;
      this.CommentService.addComment(this.comentario).subscribe(
        response => {
          console.log('Comentario enviado con éxito', response);
          //Recargar pagina
          this.getComments();
          
          // Aquí podrías limpiar el formulario o redirigir al usuario, etc.
          this.resetForm();
        },
        error => {
          console.error('Error al enviar el comentario:', error);
        }
      );
    } else {
      // Manejar el caso de que algún campo esté vacío
      console.error('Todos los campos son obligatorios');
    } 
   }

    resetForm() {
      this.comentario = {
        title: '',
        description: '',
        rating: 0
      };
    }
}
