import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteServiceService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8090/veterinario/clientes/all');
  }

  findById(id: number): Observable<Cliente>{
    return this.http.get<Cliente>('http://localhost:8090/veterinario/clientes/find/' + id);
  }

  addClient(cliente: Cliente) {
    this.http.post('http://localhost:8090/veterinario/clientes/agregar', cliente).subscribe();
  }

  updateClient(cliente: Cliente) {
    this.http.put('http://localhost:8090/veterinario/clientes/update/' + cliente.id, cliente).subscribe();
  }

  deleteClient(id: number) {
    this.http.delete('http://localhost:8090/veterinario/clientes/delete/' + id).subscribe();
  }
}
