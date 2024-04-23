import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/models/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-modificar-veterinario',
  templateUrl: './admin-modificar-veterinario.component.html',
  styleUrls: ['./admin-modificar-veterinario.component.css']
})
export class AdminModificarVeterinarioComponent {

  constructor(
    private veterinarioService: VeterinarioServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  vetAux!: Veterinario;

  llegaVet!: Veterinario;
  formVet!: Veterinario;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.veterinarioService.findById(id).subscribe(
        (vet) => {
          if (vet) {
            this.vetAux = vet;
            this.llegaVet = Object.assign({}, this.vetAux);
            this.formVet = Object.assign({}, this.vetAux);
          } else {
            this.router.navigate(['/id-not-found/veterinario/' + id]);
          }
        }
      );
    });

    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }

  sendVet!: Veterinario;

  actualizarVet() {
    this.sendVet = Object.assign({}, this.formVet);
    this.veterinarioService.updateVet(this.sendVet);
    
    this.mostrarAlerta(this.sendVet.nombre);
  }

  mostrarAlerta(nombreVet: string) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Actualizar datos del veterinario</span>',
      html: 'Se han actualizado los datos del veterinario:  ' + nombreVet,
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
