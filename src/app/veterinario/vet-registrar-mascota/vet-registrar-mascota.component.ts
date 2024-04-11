import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Mascota } from 'src/app/models/mascota';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';
import Swal from 'sweetalert2';

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
    
    this.mostrarAlerta(this.sendMascota);
  }

  mostrarAlerta(mascota: Mascota) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Se ha creado una nueva mascota</span>',
      html: 'Se ha creado la mascota:  ' + mascota.nombre + ' y su dueño es el cliente con la cedula:  ' + mascota.cliente.cedula,
      imageUrl: "../../../assets/images/popup.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      confirmButtonColor: '#3468c0',
      confirmButtonText: 'Siguiente',
      customClass: {
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class'
      },
      reverseButtons: true,
    }).then((result) => {
      // Resultado de la alerta
      if (result.isConfirmed) {
        this.router.navigate(['/veterinario/mascotas/all']);
      }
    });
  }
}
