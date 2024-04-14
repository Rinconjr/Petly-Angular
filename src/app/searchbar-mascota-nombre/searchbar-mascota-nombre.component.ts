import { Component, OnInit } from '@angular/core';
import { Mascota } from 'src/app/models/mascota';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-searchbar-mascota-nombre',
  templateUrl: './searchbar-mascota-nombre.component.html',
  styleUrls: ['./searchbar-mascota-nombre.component.css']
})
export class ClienteSearchbarComponent implements OnInit {
  listaMascotas!: Mascota[];

  constructor(private mascotaService: MascotaServiceService) {}

  ngOnInit(): void {

    this.mascotaService.findAll().subscribe(
      (mascotas) => this.listaMascotas = mascotas
    );

    const inputSearch = document.getElementById('myInput') as HTMLInputElement;
    inputSearch.addEventListener('keyup', () => {
      this.filterTable();
    });
  }

  // Función para filtrar la tabla por estado
  filterTableByState() {
    this.filterTable();
  }

  // Función para filtrar la tabla por nombre y estado
  filterTable() {
    const filter = (document.getElementById('myInput') as HTMLInputElement).value.toUpperCase();

    const filteredMascotas = this.listaMascotas.filter((mascota) => {
      const nombre = mascota.nombre.toUpperCase();
      const estadoMascota = mascota.estado.toUpperCase();
      return (
        nombre.includes(filter)
      );
    });

    this.listaMascotas.forEach((mascota) => {
      const row = document.getElementById(`mascota-row-${mascota.id}`);
      if (row) {
        row.style.display = filteredMascotas.includes(mascota)
          ? ''
          : 'none';
      }
    });
  }
}
