import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

constructor(
  private http: HttpClient
) { }

    //Get comments for games
    public getComments(gameId: string): Observable<any[]> {
      const url = `${API_URL}/games/${gameId}/comments`;
      return this.http.get<any[]>(url);
    }
}
