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
    return this.http.get<Mascota[]>('http://localhost:8090/mascota/all');
  }

  findById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>('http://localhost:8090/mascota/find/' + id);
  }

  findByIdPet(id: number): Observable<Mascota>{
    return this.http.get<Mascota>('http://localhost:8090/mascota/buscar/' + id);
  }

  addPet(mascota: Mascota) {
    this.http.post('http://localhost:8090/mascota/agregar/' + mascota.cliente.cedula, mascota).subscribe();
  }

  updatePet(mascota: Mascota) {
    this.http.put('http://localhost:8090/mascota/update', mascota).subscribe();
  }

  deletePet(id: number) {
    this.http.delete('http://localhost:8090/mascota/delete/' + id).subscribe();
  }

  activePets() {
    return this.http.get<Mascota[]>('http://localhost:8090/dashboard/mascotas/activas');
  }

  totalPets(){ 
    return this.http.get<Mascota[]>('http://localhost:8090/dashboard/mascotas/totales');
  }


}
