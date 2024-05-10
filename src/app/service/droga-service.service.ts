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

  totalGanDrogas() {
    return this.http.get<Droga[]>('http://localhost:8090/dashboard/droga/ganancias');
  }

  totalVendDrogas() {
    return this.http.get<Droga[]>('http://localhost:8090/dashboard/droga/ventas');
  }

  top3Drogas() {
    return this.http.get<Droga[]>('http://localhost:8090/dashboard/droga/top');
  }

  reporteAnual() {
    return this.http.get<Droga[]>('http://localhost:8090/dashboard/reporte/anual');
  }

  ventasMensuales() {
    return this.http.get<Droga[]>('http://localhost:8090/dashboard/ventas/mensuales');
  }

  gastosIngresos() {
    return this.http.get<Droga[]>('http://localhost:8090/dashboard/gastos/ingresos');
  }
}
