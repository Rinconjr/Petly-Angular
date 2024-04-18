import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Droga } from '../models/droga';

@Injectable({
  providedIn: 'root'
})
export class DrogaServiceService {

  constructor(
    private http: HttpClient
  ) { }

  findAll() {
    return this.http.get<Droga[]>('http://localhost:8090/drogas/all');
  }

  findDisponibles() {
    return this.http.get<Droga[]>('http://localhost:8090/drogas/disponibles');
  }
}
