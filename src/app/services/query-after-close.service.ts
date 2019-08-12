import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryAfterCloseService {

  constructor(private http: HttpClient) { }

  logout(): Observable<any> {
    return this.http.get('http://localhost:3000/logout');
  }
}
