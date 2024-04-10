import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from '../models/mascota';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class MascotaServiceService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Mascota[]>{
    return this.http.get<Mascota[]>('http://localhost:8090/veterinario/mascotas/all');
  }

  findById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>('http://localhost:8090/veterinario/mascotas/find/' + id);
  }

  findByIdPet(id: number): Observable<Mascota>{
    return this.http.get<Mascota>('http://localhost:8090/veterinario/mascotas/buscar/' + id);
  }

  addPet(mascota: Mascota) {
    this.http.post('http://localhost:8090/veterinario/mascotas/agregar', mascota).subscribe();
  }

  updatePet(mascota: Mascota) {
    this.http.put('http://localhost:8090/veterinario/mascotas/update/' + mascota.id, mascota).subscribe();
  }

  deletePet(id: number) {
    this.http.delete('http://localhost:8090/veterinario/mascotas/delete/' + id).subscribe();
  }
}
