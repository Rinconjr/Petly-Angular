import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/models/mascota';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';

@Component({
  selector: 'app-vet-registrar-mascota',
  templateUrl: './vet-registrar-mascota.component.html',
  styleUrls: ['./vet-registrar-mascota.component.css']
})
export class VetRegistrarMascotaComponent {

  constructor(
    private mascotaService: MascotaServiceService,
    private router: Router,
    ) {}

    formMascota: Mascota = {
      id: 0,
      nombre: '',
      raza: '',
      edad: null,
      peso: null,
      enfermedad: '',
      foto: '',
      estado: 'Disponible',
      cliente: {
        id: null,
        cedula: '',
        nombre: '',
        apellido: '',
        correo: '',
        celular: ''
      }
    }

  sendMascota!: Mascota;
  
  agregarMascota(){
    this.sendMascota = Object.assign({}, this.formMascota);
    this.mascotaService.addPet(this.sendMascota);
    this.router.navigate(['/veterinario/mascotas/all']);
  }
}
