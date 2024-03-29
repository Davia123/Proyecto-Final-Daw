import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TopsService {
  constructor(private http: HttpClient) {}

  getTop2Weeks(): Observable<any> {
    const url = '/tops/api.php?request=top100in2weeks';
    return this.http.get<any>(url);
  }

  getTopForever(): Observable<any> {
    const url = '/tops/api.php?request=top100forever';
    return this.http.get<any>(url);
  }
}
