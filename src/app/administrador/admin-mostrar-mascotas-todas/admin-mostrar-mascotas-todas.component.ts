import { Component, OnInit } from '@angular/core';
import { Mascota } from '../../models/mascota';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-mostrar-mascotas-todas',
  templateUrl: './admin-mostrar-mascotas-todas.component.html',
  styleUrls: ['./admin-mostrar-mascotas-todas.component.css']
})
export class AdminMostrarMascotasTodasComponent implements OnInit {
  listaMascotas: Mascota[] = [];
  filtroEstado: string = 'Todas'; // Estado inicial del filtro

  constructor(private mascotaService: MascotaServiceService) {}

  ngOnInit(): void {

    this.mascotaService.findAll().subscribe(
      (mascotas) => this.listaMascotas = mascotas
    );

    const inputSearch = document.getElementById('myInput') as HTMLInputElement;
    inputSearch.addEventListener('keyup', () => {
      this.filterTable();
    });

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

    const index = this.listaMascotas.findIndex((mascota) => mascota.id === idMascota);
    if (this.listaMascotas[index].estado === 'Disponible') {
      this.listaMascotas[index].estado = 'Inactivo';
    }
    else {
      this.listaMascotas[index].estado = 'Disponible';
    }
  }


    // Función para filtrar la tabla por estado
    filterTableByState() {
      this.filterTable();
    }
  
    // Función para filtrar la tabla por nombre y estado
    filterTable() {
      const filter = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();
      const estado = this.filtroEstado.toUpperCase();
  
      const filteredMascotas = this.listaMascotas.filter((mascota) => {
        const nombre = mascota.nombre.toUpperCase();
        const estadoMascota = mascota.estado.toUpperCase();
        return (
          (estado === 'TODAS' || estadoMascota === estado) &&
          nombre.includes(filter)
        );
      });
  
      this.listaMascotas.forEach((mascota) => {
        const row = document.getElementById(`mascota-row-${mascota.id}`);
        if (row) {
          row.style.display = filteredMascotas.includes(mascota)
            ? ''
            : 'none';
        }
      });
    }
  
    // Event listener para los botones de radio
    onRadioChange(event: Event) {
      this.filtroEstado = (event.target as HTMLInputElement).value;
      this.filterTable();
    }

    

}
