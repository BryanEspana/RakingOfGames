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
  items: CarouselItem[] = [];
  storeId: string = '';
  DataStore: StoreID | undefined;
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
    console.log("este es el storeid; " + storeId);
    this.loading = true;
    if(storeId != undefined && storeId != null){
      this.storesService.getStoresById(storeId).subscribe((data: any) => {
        this.DataStore = data;
        console.log("info de datastore", this.DataStore);
        console.log("info de datastore", this.DataStore?.name);
        console.log("info de data", data);
        console.log("info de data", data.name);
      });

      this.storesService.getGamesForStores(NameStoreId).subscribe((data: any) =>{
        this.items = data;
        this.loading = false;
        this.GoInfoStoreActivate = true;
        console.log(data);
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
}
