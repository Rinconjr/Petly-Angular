import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';

@Component({
  selector: 'app-vet-mostrar-mascota',
  templateUrl: './vet-mostrar-mascota.component.html',
  styleUrls: ['./vet-mostrar-mascota.component.css']
})
export class VetMostrarMascotaComponent implements OnInit {

  cliente!: any;

  constructor(
    private mascotaService: MascotaServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      this.mascotaService.findById(id).subscribe(
        (cliente) => {
          if(cliente != null ) 
            this.cliente = cliente
          else 
            this.router.navigate(['/id-not-found/mascota/' + id]);
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
}
