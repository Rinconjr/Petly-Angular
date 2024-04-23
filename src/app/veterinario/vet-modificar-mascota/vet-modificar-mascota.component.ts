import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Mascota } from 'src/app/models/mascota';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vet-modificar-mascota',
  templateUrl: './vet-modificar-mascota.component.html',
  styleUrls: ['./vet-modificar-mascota.component.css'],
})
export class VetModificarMascotaComponent implements OnInit {
  constructor(
    private mascotaService: MascotaServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  mascotaAux!: Mascota;

  cliente!: Cliente;
  formMascota!: Mascota;

  vet_id!: number;
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.vet_id = Number(params.get('vet_id'));
      this.mascotaService.findByIdPet(id).subscribe(
        (mascota) => {
          if(mascota) {
            this.mascotaAux = mascota;
            this.formMascota = Object.assign({}, this.mascotaAux);
          } else {
            this.router.navigate(['/id-not-found/' + this.vet_id + '/mascota/' + id]);
          }
        }
      );

      this.mascotaService.findById(id).subscribe(
        (cliente) => {
          this.cliente = cliente;
        }
      );
    });

    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add('active');
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove('active');
    });
  }

  sendMascota!: Mascota;

  actualizarMascota() {
    this.sendMascota = Object.assign({}, this.formMascota);
    this.mascotaService.updatePet(this.sendMascota);

    this.mostrarAlerta(this.sendMascota.nombre);
  }

  mostrarAlerta(nombreMascota: string) {
    // Popup de alerta
    Swal.fire({
      title: '<span style="color: #000000;">Actualizar datos de la mascota</span>',
      html: 'Se han actualizado los datos de la mascota:  ' + nombreMascota,
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
        this.router.navigate(['/veterinario/' + this.vet_id + '/mascotas/all']);
      }
    });
  }
  

}
