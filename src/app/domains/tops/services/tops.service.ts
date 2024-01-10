import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopsService {
  constructor(private http: HttpClient) {}

  getTop2Weeks(): Observable<any> {
    const url = 'https://steamspy.com/api.php?request=top100in2weeks';
    return this.http.get<any>(url);
  }
}
