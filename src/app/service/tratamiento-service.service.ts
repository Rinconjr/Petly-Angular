import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tratamiento } from '../models/tratamiento';

@Injectable({
  providedIn: 'root'
})
export class TratamientoServiceService {

  constructor(
    private http: HttpClient
  ) { }

  findByIdVet (id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamiento/find/veterinario/' + id);
  }

  findByIdPet (id: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/tratamiento/find/mascota/' + id);
  }

  addTreatment (droga: string, idVet: number, idDroga: number) {
    return this.http.post('http://localhost:8090/tratamiento/add/'+ idVet + '/' + idDroga, droga).subscribe();
  }

  lastMonthTreatment() {
    return this.http.get<Tratamiento[]>('http://localhost:8090/dashboard/tratamientos/administrados');
  }

  numTratXTipo() {
    return this.http.get<Tratamiento[]>('http://localhost:8090/dashboard/tratamientos/cantidad_tipo')
  }

}
