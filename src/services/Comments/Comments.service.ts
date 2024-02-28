import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_COMMENTS, DELETE_COMMENT, GET_COMMENTS, RESPONDER_COMENTARIO, UDPATE_SUBCOMENTARY, UPDATE_COMMENT } from 'src/app/config/backEndRoutes';
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

    //Delete comment
    public deleteComment(commentId: string): Observable<any> {
      const url = `${API_URL}${DELETE_COMMENT}${commentId}`;
      return this.http.delete<any>(url);
    }

    public AddResponderComment(commentId: string, respuesta: string): Observable<any> {
      const url = `${API_URL}${RESPONDER_COMENTARIO}/${commentId}`;
      return this.http.post<any>(url, { respuesta });
    }

    public UpdateComments(commentId: string, SubCommentId: string, respuesta: string): Observable<any>{
      const url = `${API_URL}${UDPATE_SUBCOMENTARY}${commentId}/responses/${SubCommentId}`;
      return this.http.put<any>(url, {respuesta});
    }

    




}
