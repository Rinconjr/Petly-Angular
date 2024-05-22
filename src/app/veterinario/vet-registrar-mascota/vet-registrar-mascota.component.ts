import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/models/mascota';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';
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
    private clienteService: ClienteServiceService,
    private router: Router,
    private route: ActivatedRoute
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

  vet_id!: number

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.vet_id = Number(params.get('vet_id'));
    });
  }
  
  agregarMascota(){
    this.sendMascota = Object.assign({}, this.formMascota);

    this.clienteService.findByCedula(this.sendMascota.cliente.cedula).subscribe(
      (llegaCliente) => {
        if(llegaCliente) {
          this.mascotaService.addPet(this.sendMascota);  
          this.mostrarAlerta(this.sendMascota);
        } else {
          this.mostrarAlertaError(this.sendMascota.cliente.cedula);
        }
      }
    );

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

  mostrarAlertaError(cedula: string) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">No se ha podido registrar</span>',
      html: 'No se ha podido registrar la mascota porque la cedula ' + cedula + ' no existe',
      imageUrl: "../../../assets/images/popup.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      confirmButtonColor: '#3468c0',
      confirmButtonText: 'Regresar al formulario',
      customClass: {
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class'
      },
      reverseButtons: true,
    }).then((result) => {
      
    });
  }

  redirect() {
    this.router.navigate(['/veterinario/mascotas/all']);
  }
}
