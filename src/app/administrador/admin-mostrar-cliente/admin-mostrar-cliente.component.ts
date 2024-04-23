import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { Mascota } from 'src/app/models/mascota';
import { ClienteServiceService } from 'src/app/service/cliente-service.service';

@Component({
  selector: 'app-admin-mostrar-cliente',
  templateUrl: './admin-mostrar-cliente.component.html',
  styleUrls: ['./admin-mostrar-cliente.component.css']
})
export class AdminMostrarClienteComponent {

  cliente!: Cliente;
  listaMascotas!: Mascota[] | undefined; // esto seria una lista de mascotas del cliente

  constructor(
    private clienteService: ClienteServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      
      this.clienteService.findById(id).subscribe(
        (llegaCliente) => {
          if(llegaCliente) {
            this.cliente = llegaCliente;
            this.listaMascotas = this.cliente.mascotas;
          }            
          else 
            this.router.navigate(['/id-not-found/cliente/' + id]);
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


  // Función para filtrar la tabla por nombre y estado
  filterTable() {
    const filter = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();

    const filteredMascotas = this.listaMascotas?.filter((mascota) => {
      const nombre = mascota.nombre.toUpperCase();
      const estadoMascota = mascota.estado.toUpperCase();
      return (
        nombre.includes(filter)
      );
    });

    this.listaMascotas?.forEach((mascota) => {
      const row = document.getElementById(`mascota-row-${mascota.id}`);
      if (row) {
        row.style.display = filteredMascotas?.includes(mascota)
          ? ''
          : 'none';
      }
    });
  }


}
