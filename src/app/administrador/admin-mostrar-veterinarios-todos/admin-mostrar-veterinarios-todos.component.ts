import { Component } from '@angular/core';
import { Veterinario } from 'src/app/models/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-admin-mostrar-veterinarios-todos',
  templateUrl: './admin-mostrar-veterinarios-todos.component.html',
  styleUrls: ['./admin-mostrar-veterinarios-todos.component.css']
})
export class AdminMostrarVeterinariosTodosComponent {
  listaVeterinarios!: Veterinario[];

  constructor(
    private veterinarioService: VeterinarioServiceService
  ) { }

  ngOnInit(): void {

    this.veterinarioService.findAll().subscribe(
      (veterinarios) => this.listaVeterinarios = veterinarios
    );
  
    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }

  mostrarAlerta(idVeterinario: number) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Cambiar estado del Veterinario</span>',
      html: '¿Estás seguro que quieres cambiar el estado de este veterinario?',
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
        this.cambiarEstadoVet(idVeterinario);
      }
    });
  }

  cambiarEstadoVet(idVet: number) {
    this.veterinarioService.deleteVet(idVet);

    const index = this.listaVeterinarios.findIndex((vet) => vet.id === idVet);

    if (this.listaVeterinarios[index].estado === 'Disponible') {
      this.listaVeterinarios[index].estado = 'Inactivo';
    }
    else {
      this.listaVeterinarios[index].estado = 'Disponible';
    }
  }
}
