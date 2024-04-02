import { Component, Input, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { MascotaFakeService } from '../../service/mascota-fake.service';
import { ActivatedRoute } from '@angular/router';
declare var Swal: any;

@Component({
  selector: 'app-vet-mostrar-mascota',
  templateUrl: './vet-mostrar-mascota.component.html',
  styleUrls: ['./vet-mostrar-mascota.component.css']
})
export class VetMostrarMascotaComponent implements OnInit {

  @Input() 
  mascota!: Mascota;

  constructor(
    private mascotaService: MascotaFakeService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.mascota = this.mascotaService.findById(id);
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
