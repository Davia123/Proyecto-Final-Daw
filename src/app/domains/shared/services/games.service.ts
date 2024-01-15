import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}

  getGameByAppIds(appids: any): Observable<any> {
    const url = '/game/api/appdetails?appids=' + appids;
    return this.http.get<any>(url);
  }
}
