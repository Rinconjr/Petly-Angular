import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mascota } from '../models/mascota';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(
    private http: HttpClient
  ) { }

  findMyPets(id: number){
    return this.http.get<Cliente>('http://localhost:8090/usuario/' + id);
  }

  findPet(id: number, idMascota: number){
    return this.http.get<Cliente>('http://localhost:8090/usuario/' + id + '/mascota/' + idMascota);
  }
}
