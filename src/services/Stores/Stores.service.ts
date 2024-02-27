import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { GET_ALL_GAMES_BY_STORES, GET_ALL_STORES, GET_STORE } from 'src/app/config/backEndRoutes';
import { API_URL } from 'src/app/config/config';

interface GameResponse {
  games: Game[];
  totalPages: number;
}

interface Game {
  _id: string;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  ratings: Rating[];
  reviews_count: number;
  platforms: Platform2[];
  genres: Genre[];
  short_screenshots: Shortscreenshot[];
  stores: Store2[];
}

interface Store2 {
  id: number;
  store: Store;
}

interface Store {
  id: number;
  name: string;
  slug: string;
  domain: string;
  games_count: number;
  image_background: string;
}

interface Shortscreenshot {
  id: number;
  image: string;
}

interface Genre {
  name: string;
}

interface Platform2 {
  platform: Platform;
}

interface Platform {
  id: number;
  name: string;
  slug: string;
  image?: any;
  year_end?: any;
  year_start?: (null | number)[];
  games_count: number;
  image_background: string;
}

interface Rating {
  id: number;
  title: string;
  count: number;
  percent: number;
}
interface Game {
  _id: string;
  name: string;
  genres: { name: string }[];
  background_image: string;
  rating: number;
}

interface SimplifiedGame {
  _id: string;
  name: string;
  genre: string;
  image: string;
  rating: number;
}

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
  public getGamesForStores(id: string, page: number = 1): Observable<{ games: SimplifiedGame[], totalPages: number }> {
    const url = `${API_URL}${GET_ALL_GAMES_BY_STORES}/${id}?page=${page}`;
    return this.http.get<GameResponse>(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(
      map(response => {
        // Asume que response.totalPages ya es el número correcto de páginas totales
        const totalPages = response.totalPages;
        // Transforma los juegos a SimplifiedGame[]
        const games = response.games.map(game => ({
          _id: game._id,
          name: game.name,
          genre: game.genres.length > 0 ? game.genres[0].name : 'Unknown',
          image: game.background_image,
          rating: game.rating
        }));
        // Retorna un objeto que contiene tanto los juegos transformados como el total de páginas
        return { games, totalPages };
      })
    );
  }
  
}
