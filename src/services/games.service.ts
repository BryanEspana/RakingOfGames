import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, throwError, Observable } from 'rxjs';
import { ALL_GAMES_URL, PROXIMOS_LANZAMIENTOS_URL, TOP_GAMES_URL, TOP_SHOOTERS_URL, TOP_SPORTS_URL, WORST_GAMES_URL } from 'src/app/config/backEndRoutes';
import { API_URL } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

constructor(
  public http: HttpClient,
  ) { }


  //Allgames
  public ObtenerTodosLosJuegos(){
    const url = `${API_URL}${ALL_GAMES_URL}`;
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(
      map(response => response.map(game => ({
        _id: game._id,
        name: game.games.name,
        genre: game.games.genres.length > 0 ? game.genres[0].name : 'Unknown', // Asume el primer género si existe, de lo contrario 'Unknown'
        image: game.games.background_image,
        rating: game.games.rating
      }))),
      catchError(err => {
        console.error("ERROR al obtener los juegos:", err);
        return throwError(() => err);
      })
    );
  }

  //TOP 10 JUEGOS
  public ObtenerTopGames() {
    const url = `${API_URL}${TOP_GAMES_URL}`;
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(
      map(response => response.map(game => ({
        _id: game._id,
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

  //TOP MEJORES SHOOTERS
  public ObtenerTopShooters() {
    const url = `${API_URL}${TOP_SHOOTERS_URL}`;
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(
      map(response => response.map(game => ({
        _id: game._id,
        name: game.name,
        genre: 'Shooter', // Asume el primer género si existe, de lo contrario 'Unknown'
        image: game.background_image,
        rating: game.rating
      }))),
      catchError(err => {
        console.error("ERROR al obtener los juegos:", err);
        return throwError(() => err);
      })
    );
  }

  //proximos lanzamientos
  public ObtenerProximosLanzamientos(){
    const url = `${API_URL}${PROXIMOS_LANZAMIENTOS_URL}`;
    return this.http.get<any[]>(url, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).pipe(
      
      map(response => response.map(game => ({
        _id: game._id,
        name: game.name,
        genre: game.genre.length > 0 ? game.genre[0] : 'Unknown', // Asume el primer género si existe, de lo contrario 'Unknown'
        image: game.background_image,
        rating: game.rating
      }))),

      );
    }

    //Mejores juegos de deportes
    public ObtenerTopSports(){
      const url = `${API_URL}${TOP_SPORTS_URL}`;
      return this.http.get<any[]>(url, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }).pipe(
        map(response => response.map(game => ({
          _id: game._id,
          name: game.name,
          genre: game.genre.length > 0 ? game.genre[0] : 'Unknown', // Asume el primer género si existe, de lo contrario 'Unknown'
          image: game.background_image,
          rating: game.rating
        }))),
        catchError(err => {
          console.error("ERROR al obtener los juegos:", err);
          return throwError(() => err);
        })
      );
    }

    //Peores juegos
    public ObtenerPeoresJuegos(){
      const url = `${API_URL}${WORST_GAMES_URL}`;
      return this.http.get<any[]>(url, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }).pipe(
        map(response => response.map(game => ({
          _id: game._id,
          name: game.name,
          genre: game.genre.length > 0 ? game.genre[0] : 'Unknown', // Asume el primer género si existe, de lo contrario 'Unknown'
          image: game.background_image,
          rating: game.rating
        }))),
        catchError(err => {
          console.error("ERROR al obtener los juegos:", err);
          return throwError(() => err);
        })
      );
    }

    //getData de game
    /*public getGameDetails(gameId: string) {
      const url = `${API_URL}/game/${gameId}`;
      return this.http.get<any>(url, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }).pipe(
        map(response => ({
          name: response.name,
          genre: response.genres.length > 0 ? response.genres[0].name : 'Unknown', // Asume el primer género si existe, de lo contrario 'Unknown'
          image: response.background_image,
          rating: response.rating
        })),
        catchError(err => {
          console.error("ERROR al obtener los detalles del juego:", err);
          return throwError(() => err);
        })
      );
    }*/
    
     public getGameDetails(gameId: string): Observable<any> {
      const url = `${API_URL}/games/${gameId}`;
      return this.http.get<any>(url);
    }
    

}
