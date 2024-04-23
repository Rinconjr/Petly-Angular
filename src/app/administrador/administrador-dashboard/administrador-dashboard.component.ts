import { Component, OnInit } from '@angular/core';
import { Tratamiento } from 'src/app/models/tratamiento';
import { Veterinario } from 'src/app/models/veterinario';
import { DrogaServiceService } from 'src/app/service/droga-service.service';
import { MascotaServiceService } from 'src/app/service/mascota-service.service';
import { TratamientoServiceService } from 'src/app/service/tratamiento-service.service';
import { VeterinarioServiceService } from 'src/app/service/veterinario-service.service';

@Component({
  selector: 'app-administrador-dashboard',
  templateUrl: './administrador-dashboard.component.html',
  styleUrls: ['./administrador-dashboard.component.css'],
})
export class AdministradorDashboardComponent implements OnInit {
  totalTratUM: any;
  cantTratXTipo: any;
  cantVetAct: any;
  cantVetInact: any;
  totalPets: any;
  cantPetsAct: any;
  ventasTotales: any;
  ventasTotalesDash!: string;
  gananciasTotales: any;

  constructor(
    private tratamientoService: TratamientoServiceService,
    private veterinarioService: VeterinarioServiceService,
    private mascotaService: MascotaServiceService,
    private drogasService: DrogaServiceService
  ) {}

  ngOnInit(): void {
    this.tratamientoService.lastMonthTreatment().subscribe((data) => {
      this.totalTratUM = data;
    });

    this.tratamientoService.numTratXTipo().subscribe((data) => {
      this.cantTratXTipo = data;

      this.cantTratXTipo.forEach((element: any) => {});
    });

    this.tratamientoService.numTratXTipo().subscribe((data) => {
      this.cantTratXTipo = data;

      // Lista para almacenar element[0]
      const listaElement0: any[] = this.cantTratXTipo.map(
        (element: any) => element[0]
      );

      // Lista para almacenar element[1]
      const listaElement1: any[] = this.cantTratXTipo.map(
        (element: any) => element[1]
      );

      // console.log("Lista de element[0]:", listaElement0);
      // console.log("Lista de element[1]:", listaElement1);
    });

    this.veterinarioService.totalVets().subscribe((data) => {
      this.cantVetAct = data;
    });

    this.veterinarioService.inactiveVets().subscribe((data) => {
      this.cantVetInact = data;
    });

    this.mascotaService.totalPets().subscribe((data) => {
      this.totalPets = data;
    });

    this.mascotaService.activePets().subscribe((data) => {
      this.cantPetsAct = data;
    });

    this.drogasService.totalVendDrogas().subscribe((data) => {
      this.ventasTotales = data.toLocaleString();;
    });

    this.drogasService.totalGanDrogas().subscribe((data) => {
      this.gananciasTotales = data.toLocaleString();;
    });

    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add('active');
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove('active');
    });
  }

  
  
}
