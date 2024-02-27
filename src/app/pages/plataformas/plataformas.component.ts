import { Component, Input, OnInit } from '@angular/core';
import { StoresService } from 'src/services/Stores/Stores.service';
import { CarouselItem } from '../Carrousel/Carrousel.component';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

interface GameResponse {
  games: Game[];
  totalPages: number;
}

interface Game {
  _id: string;
  name: string;
  genre: string;
  image: string;
  rating: number;
}

export interface Stores {
  games:       any[];
  _id:         string;
  id:          number;
  name:        string;
  domain:      string;
  slug:        string;
  games_count: number;
  image:       string;
}

export interface StoreID {
  id:          number;
  name:        string;
  domain:      string;
  games_count: number;
  image:       string;
}


@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.scss']
})

export class PlataformasComponent implements OnInit {
  filtroBusqueda: string = '';
  totalPages: number = 1;
  p: number = 1;
  itemsFiltrados: any[] = []; 
  items: CarouselItem[] = [];
  storeId: string = '';
  DataStore: StoreID | undefined;
  DataGamesStore: GameResponse | undefined;
  GoInfoStoreActivate: boolean = false;
  NameStoreId: string = '';
  loading: boolean = false;
  stores: Stores[] = [];
  constructor(
     private storesService: StoresService,
     private route: Router
  ) { }

  ngOnInit() {
    this.getAllStores();
    console.log("DataStore", this.DataStore);
    this.cambiarPagina(1);
  }

  getAllStores(){
    this.storesService.getAllStores().subscribe((data: any) => {
      this.stores = data;
    });
  }
  GetInfoStores(storeId: string){    

  }
  GoInfoStore(storeId: string, NameStoreId: string){
    window.scrollTo(0, 0);
    this.loading = true;
    this.NameStoreId = NameStoreId;

    if(storeId){
      this.storesService.getStoresById(storeId).subscribe((data: any) => {
        this.DataStore = data;
      });

      const page = 1; 
      this.storesService.getGamesForStores(NameStoreId, page).subscribe((data: any) =>{
        this.items = data;
        console.log("Items", this.items);
        this.totalPages = Math.ceil(data.totalGames /20);
        this.filtrarJuegos(); 
        this.loading = false;
        this.GoInfoStoreActivate = true;
        this.DataGamesStore = data;
        console.log("DataGamesStore", this.DataGamesStore);
        console.log("", data);
        
      });

    
    }

  }
  GoToGame(gameId: string) {
    console.log("Navigating to game with ID:", gameId); // Añade esto para debuggear
    this.route.navigate(['/games', gameId]);
  }

  Back(){
    this.GoInfoStoreActivate = false;
  }
  filtrarJuegos() {
    if (!this.filtroBusqueda) {
      this.itemsFiltrados = this.items;
    } else {
      this.itemsFiltrados = this.items.filter(item =>
        item.name.toLowerCase().includes(this.filtroBusqueda.toLowerCase())
      );

      if (this.itemsFiltrados.length === 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No hay juegos con ese nombre',
        });
      }
    }
  }
  cambiarPagina(page: number) {
    this.loading = true;
    this.p = page; 
    this.storesService.getGamesForStores(this.NameStoreId, page).subscribe((data: any) => {
      this.items = data.games || data; 
      this.totalPages = Math.ceil(data.totalGames / 20);
      this.filtrarJuegos();
      this.loading = false;
    }, error => {
      this.loading = false;
      console.error(error);
    });
  }
  

  
}
