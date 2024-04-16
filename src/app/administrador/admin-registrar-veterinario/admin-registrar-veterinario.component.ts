import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinario } from 'src/app/models/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-registrar-veterinario',
  templateUrl: './admin-registrar-veterinario.component.html',
  styleUrls: ['./admin-registrar-veterinario.component.css']
})
export class AdminRegistrarVeterinarioComponent {

  constructor(
    private veterinarioService: VeterinarioServiceService,
    private router: Router,
    ) {}

  formVet: Veterinario = {
    id: 0,
    cedula: '',
    nombre: '',
    apellido: '',
    contrasena: '',
    foto: '',
    especialidad: '',
    numAtenciones: 0,
    estado: 'Disponible',
  };

  sendVet!: Veterinario;

  agregarVeterinario(): void {
    this.sendVet = Object.assign({}, this.formVet);

    this.veterinarioService.addVet(this.sendVet);

    this.mostrarAlerta(this.sendVet);
  }

  mostrarAlerta(vet: Veterinario) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Se ha creado un nuevo veterinario</span>',
      html: 'Se ha creado al veterinario ' + vet.nombre,
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
        this.router.navigate(['/admin/veterinarios/all']);
      }
    });
  }

}
