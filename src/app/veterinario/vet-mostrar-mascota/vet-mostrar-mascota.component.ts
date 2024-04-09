import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { ActivatedRoute } from '@angular/router';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-vet-mostrar-mascota',
  templateUrl: './vet-mostrar-mascota.component.html',
  styleUrls: ['./vet-mostrar-mascota.component.css']
})
export class VetMostrarMascotaComponent implements OnInit {

  mascota!: Mascota;

  constructor(
    private mascotaService: MascotaServiceService,
    private clienteService: ClienteServiceService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      this.mascotaService.findById(id).subscribe(
        (llegaMascota) => this.mascota = llegaMascota
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
}
