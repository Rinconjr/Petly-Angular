import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/models/mascota';
import { MascotaFakeService } from 'src/app/service/mascota-fake.service';
declare var Swal: any;

@Component({
  selector: 'app-vet-modificar-mascota',
  templateUrl: './vet-modificar-mascota.component.html',
  styleUrls: ['./vet-modificar-mascota.component.css']
})
export class VetModificarMascotaComponent implements OnInit {

  listaMascotas!: Mascota[];

  constructor(
    private mascotaService: MascotaFakeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  @Input() 
  mascotaAux!: Mascota;

  llegaMascota!: Mascota;
  formMascota!: Mascota;
 
  ngOnInit(): void {

      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        this.mascotaAux = Object.assign({}, this.mascotaService.findById(id));
        this.llegaMascota = Object.assign({}, this.mascotaAux);
        this.formMascota = Object.assign({}, this.mascotaAux);
    });
    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add("active");
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove("active");
    });
  }

  sendMascota!: Mascota;

  actualizarMascota(){
    this.sendMascota = Object.assign({}, this.formMascota);
    this.mascotaService.updateMascota(this.sendMascota);
    this.router.navigate(['/veterinario/mascotas/all']);
  }
}
