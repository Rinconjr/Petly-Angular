import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/models/mascota';
import { MascotaFakeService } from 'src/app/service/mascota-fake.service';

@Component({
  selector: 'app-vet-registrar-mascota',
  templateUrl: './vet-registrar-mascota.component.html',
  styleUrls: ['./vet-registrar-mascota.component.css']
})
export class VetRegistrarMascotaComponent {

  listaMascotas!: Mascota[];

  constructor(
    private mascotaService: MascotaFakeService,
    private router: Router,
    ) {}

  sendMascota!: Mascota;

  //TODO: por ahora todos empiezan con el mismo cliente
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
      cedula: '111',
      nombre: 'Alejandro',
      apellido: 'Suarez',
      correo: 'alejandro@gmail.com',
      celular: '111',
    }
  }

  addMascota() {
    this.sendMascota = Object.assign({}, this.formMascota);
    this.mascotaService.createMascota(this.sendMascota);
    this.router.navigate(['/veterinario/mascotas/all']);
  }
}
