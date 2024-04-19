import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinario } from '../models/veterinario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioServiceService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(){
    return this.http.get<Veterinario[]>('http://localhost:8090/veterinario/all');
  }

  findById(id: number): Observable<Veterinario>{
    return this.http.get<Veterinario>('http://localhost:8090/veterinario/find/' + id);
  }

  addVet(vet: Veterinario) {
    this.http.post('http://localhost:8090/veterinario/add', vet).subscribe();
  }

  updateVet(vet: Veterinario) {
    this.http.put('http://localhost:8090/veterinario/update', vet).subscribe();
  }

  deleteVet(id: number) {
    this.http.delete('http://localhost:8090/veterinario/delete/' + id).subscribe();
  }

  totalVets() {
    return this.http.get('http://localhost:8090/dashboard/veterinarios/total')
  }

  inactiveVets() {
    return this.http.get('http://localhost:8090/dashboard/veterinarios/inactivos')
  }
}
