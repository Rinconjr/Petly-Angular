import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private http: HttpClient
  ) { }

  encontrarRol (cedula: string): Observable<number> {
    return this.http.get<number>('http://localhost:8090/user/rol/' + cedula);
  }

  encontrarRolToken(): Observable<number> {
    return this.http.get<number>('http://localhost:8090/user/rolToken');
  }

}
