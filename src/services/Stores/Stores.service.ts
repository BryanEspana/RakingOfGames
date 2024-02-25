import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GET_ALL_GAMES_BY_STORES, GET_ALL_STORES, GET_STORE } from 'src/app/config/backEndRoutes';
import { API_URL } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

constructor(
  private http: HttpClient
) { }


  public getAllStores() {
    const url = `${API_URL}${GET_ALL_STORES}`;
    return this.http.get(url);
  }

  public getStoresById(id: string) {
    const url = `${API_URL}${GET_STORE}/${id}`;
    return this.http.get(url);
  }
  public getGamesForStores(id: string) {
    const url = `${API_URL}${GET_ALL_GAMES_BY_STORES}/${id}`;
    return this.http.get(url);
  }
}
