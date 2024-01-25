import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesGamesService {
  constructor(private http: HttpClient) {}

  getGamesByGenre(genre: string): Observable<any> {
    const url = `https://api.rawg.io/api/games?key=6d66c3b3a2ec4d5284dd892cc92e2c1b&genres=${genre}&page_size=9`;

    return this.http.get<any>(url);
  }
}
