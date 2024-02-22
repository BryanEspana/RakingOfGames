import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_COMMENTS, GET_COMMENTS, UPDATE_COMMENT } from 'src/app/config/backEndRoutes';
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
      const url = `${API_URL}${GET_COMMENTS}`;
      return this.http.post<any[]>(url, { gameId: gameId });
    }

    //Add Comments
    public addComment(comment: any): Observable<any> {
      const url = `${API_URL}${ADD_COMMENTS}`;
      return this.http.post<any>(url, comment);
    }

    //Update Comment
    public updateComment(comment: any): Observable<any> {
      const url = `${API_URL}${UPDATE_COMMENT}`;
      return this.http.put<any>(url, comment);
    }



}
