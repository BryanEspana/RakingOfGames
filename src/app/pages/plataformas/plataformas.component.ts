import { Component, Input, OnInit } from '@angular/core';
import { StoresService } from 'src/services/Stores/Stores.service';
import { CarouselItem } from '../Carrousel/Carrousel.component';
import { Router } from '@angular/router';

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


@Component({
  selector: 'app-plataformas',
  templateUrl: './plataformas.component.html',
  styleUrls: ['./plataformas.component.scss']
})

export class PlataformasComponent implements OnInit {
  items: CarouselItem[] = [];
  storeId: string = '';
  NameStoreId: string = '';
  stores: Stores[] = [];
  constructor(
     private storesService: StoresService,
     private route: Router
  ) { }

  ngOnInit() {
    this.getAllStores();
  }

  getAllStores(){
    this.storesService.getAllStores().subscribe((data: any) => {
      this.stores = data;
    });
  }
  GetInfoStores(storeId: string){    

  }
  GoInfoStore(storeId: string, NameStoreId: string){
    console.log("este es el storeid; " + storeId);
    if(storeId != undefined && storeId != null){
      this.storesService.getStoresById(storeId).subscribe((data: any) => {
        console.log(data);  
      });

      this.storesService.getGamesForStores(NameStoreId).subscribe((data: any) =>{
        console.log(data);
      });
    }

  }
  GoToGame(gameId: string) {
    console.log("Navigating to game with ID:", gameId); // Añade esto para debuggear
    this.route.navigate(['/games', gameId]);
  }

}
