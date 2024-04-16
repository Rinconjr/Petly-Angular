import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tratamiento } from 'src/app/models/tratamiento';
import { Veterinario } from 'src/app/models/veterinario';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-admin-mostar-veterinario',
  templateUrl: './admin-mostar-veterinario.component.html',
  styleUrls: ['./admin-mostar-veterinario.component.css']
})
export class AdminMostarVeterinarioComponent {

  veterinario!: Veterinario;
  listaTratamientos!: Tratamiento[] | undefined;

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
            this.listaTratamientos = this.veterinario.tratamientos;
          }            
          else 
            this.router.navigate(['/id-not-found/admin/veterinario/' + id]);
        }
      );
    });

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

  // Función para filtrar la tabla por nombre
  filterTable() {
    const filter = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();

    const filteredTratamiento = this.listaTratamientos?.filter((tratamiento) => {
      const nombre = tratamiento.mascota.nombre.toUpperCase();
      return (
        nombre.includes(filter)
      );
    });

    this.listaTratamientos?.forEach((tratamiento) => {
      const row = document.getElementById(`tratamiento-row-${tratamiento.id}`);
      if (row) {
        row.style.display = filteredTratamiento?.includes(tratamiento)
          ? ''
          : 'none';
      }
    });
  }

}
