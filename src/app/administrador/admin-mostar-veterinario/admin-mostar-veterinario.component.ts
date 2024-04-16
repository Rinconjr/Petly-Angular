import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinario } from 'src/app/models/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-admin-mostar-veterinario',
  templateUrl: './admin-mostar-veterinario.component.html',
  styleUrls: ['./admin-mostar-veterinario.component.css']
})
export class AdminMostarVeterinarioComponent {

  veterinario!: Veterinario;

  constructor(
    private veterinarioService: VeterinarioServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      this.veterinarioService.findById(id).subscribe(
        (llegaVet) => {
          if(llegaVet) {
            this.veterinario = llegaVet;
          }            
          else 
            this.router.navigate(['/id-not-found/admin/veterinario/' + id]);
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
