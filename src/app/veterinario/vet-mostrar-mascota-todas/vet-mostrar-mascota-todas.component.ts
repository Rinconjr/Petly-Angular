import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-vet-mostrar-mascota-todas',
  templateUrl: './vet-mostrar-mascota-todas.component.html',
  styleUrls: ['./vet-mostrar-mascota-todas.component.css'],
})
export class VetMostrarMascotaTodasComponent implements OnInit {
  listaMascotas!: Mascota[];

  constructor(private mascotaService: MascotaServiceService) {}

  ngOnInit(): void {

    this.mascotaService.findAll().subscribe(
      (mascotas) => this.listaMascotas = mascotas
    );

    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }

  // Definición de la función mostrarAlerta
  mostrarAlerta(idMascota: number) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Cambiar estado de la mascota</span>',
      html: '¿Estás seguro que quieres cambiar el estado de esta mascota?',
      imageUrl: "../../../assets/images/popup.png",
      imageWidth: 400,
      imageHeight: 400,
      imageAlt: 'Custom image',
      showCancelButton: true,
      cancelButtonColor: '#898989',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#3468c0',
      confirmButtonText: 'Cambiar estado',
      customClass: {
        title: 'custom-title-class',
        confirmButton: 'custom-confirm-button-class',
        cancelButton: 'custom-cancel-button-class'
      },
      reverseButtons: true,
    }).then((result) => {
      // Resultado de la alerta
      if (result.isConfirmed) {
        this.cambiarEstadoMascota(idMascota);
      }
    });
  }

  cambiarEstadoMascota(idMascota: number) {
    this.mascotaService.deletePet(idMascota);

    //TODO: Que la pagina se actualice
  }

  
}
