import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, throwError } from 'rxjs';
import { TOP_GAMES_URL } from 'src/app/config/backEndRoutes';
import { API_URL } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

constructor(
  public http: HttpClient,
  ) { }


  public ObtenerTopGames() {
    const url = `${API_URL}${TOP_GAMES_URL}`;
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(
      map(response => response.map(game => ({
        name: game.name,
        genre: game.genres.length > 0 ? game.genres[0].name : 'Unknown', // Asume el primer género si existe, de lo contrario 'Unknown'
        image: game.background_image,
        rating: game.rating
      }))),
      catchError(err => {
        console.error("ERROR al obtener los juegos:", err);
        return throwError(() => err);
      })
    );
  }

}
