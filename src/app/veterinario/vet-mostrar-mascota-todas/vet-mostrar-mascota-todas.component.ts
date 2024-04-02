import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { MascotaFakeService } from '../../service/mascota-fake.service';
import Swal from 'sweetalert2'
import { VetMostrarMascotaComponent } from '../vet-mostrar-mascota/vet-mostrar-mascota.component';

@Component({
  selector: 'app-vet-mostrar-mascota-todas',
  templateUrl: './vet-mostrar-mascota-todas.component.html',
  styleUrls: ['./vet-mostrar-mascota-todas.component.css'],
})
export class VetMostrarMascotaTodasComponent implements OnInit {
  listaMascotas!: Mascota[];

  constructor(private mascotaService: MascotaFakeService) {}

  ngOnInit(): void {
    this.listaMascotas = this.mascotaService.findAll();

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
        this.cambiarEstadoMascota(this.listaMascotas.find(m => m.id === idMascota) as Mascota);
      }
    });
  }

  cambiarEstadoMascota(mascota: Mascota) {
    this.mascotaService.deleteMascota(mascota);
  }
}
