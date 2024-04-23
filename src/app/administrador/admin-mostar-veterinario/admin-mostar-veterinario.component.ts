import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tratamiento } from 'src/app/models/tratamiento';
import { Veterinario } from 'src/app/models/veterinario';
import { TratamientoServiceService } from 'src/app/service/tratamiento-service.service';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-admin-mostar-veterinario',
  templateUrl: './admin-mostar-veterinario.component.html',
  styleUrls: ['./admin-mostar-veterinario.component.css']
})
export class AdminMostarVeterinarioComponent implements AfterViewInit {
  @ViewChild('tableContainer') tableContainer: ElementRef | undefined;

  isEndOfTable: boolean = false;

  veterinario!: Veterinario;
  listaTratamientos?: Tratamiento[];

  constructor(
    private veterinarioService: VeterinarioServiceService,
    private tratamientoService: TratamientoServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngAfterViewInit(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const tableContainer = this.tableContainer?.nativeElement;
    tableContainer.addEventListener('scroll', () => {
      this.isEndOfTable = tableContainer.scrollHeight - tableContainer.scrollTop === tableContainer.clientHeight;
    });
  }

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
            this.router.navigate(['/id-not-found/veterinario/' + id]);
        }
      );

      this.tratamientoService.findByIdVet(id).subscribe(
        (llegaLista) => {
          this.listaTratamientos = llegaLista;
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
