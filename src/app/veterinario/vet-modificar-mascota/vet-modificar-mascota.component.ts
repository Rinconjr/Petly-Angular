import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Mascota } from 'src/app/models/mascota';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';

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

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.mascotaService.findByIdPet(id).subscribe(
        (mascota) => {
          this.mascotaAux = mascota;
          this.formMascota = Object.assign({}, this.mascotaAux);
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
    this.router.navigate(['/veterinario/mascotas/all']);
  }

  

}
