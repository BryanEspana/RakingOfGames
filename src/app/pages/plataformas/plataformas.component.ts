import { Component, OnInit } from '@angular/core';
import { StoresService } from 'src/services/Stores/Stores.service';

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
  stores: Stores[] = [];
  constructor(
     private storesService: StoresService
  ) { }

  ngOnInit() {
    this.getAllStores();
  }

  getAllStores(){
    this.storesService.getAllStores().subscribe((data: any) => {
      this.stores = data;
    });
  }

}
