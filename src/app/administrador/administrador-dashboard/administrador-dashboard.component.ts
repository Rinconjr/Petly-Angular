import { Component, OnInit } from '@angular/core';
import { each } from 'chart.js/dist/helpers/helpers.core';
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
  top3trats: any;

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

    this.drogasService.top3Drogas().subscribe((data) => {
      this.top3trats = data;
      console.log(this.top3trats);
    });

    let sidebar = document.querySelector('.sidebar') as HTMLElement;

    sidebar.addEventListener('mouseover', () => {
      sidebar.classList.add('active');
    });

    sidebar.addEventListener('mouseleave', () => {
      sidebar.classList.remove('active');
    });
  }

  generarReporteAnual() {
    let csvData = 'Mes,Droga,CantidadVendida\n'; // Encabezado CSV
  
    this.drogasService.reporteAnual().subscribe((data: any[]) => {
      data.forEach((element: any) => {
        const mesNombre = this.getMonthName(element[0]); // Obtener nombre del mes
        const filaCSV = `${mesNombre},${element[1]},${element[2]}\n`; // Construir fila CSV
        csvData += filaCSV; // Agregar fila al CSV
      });
  
      this.descargarArchivoCSV(csvData, 'reporte_anual.csv'); // Descargar archivo CSV después de procesar los datos
    });
  }

  generarGananciasMensuales() {
    let csvData = 'Mes,Ventas\n'; // Encabezado CSV

    this.drogasService.gananciasMensuales().subscribe((data: any[]) => {
      data.forEach((element: any) => {
        const mesNombre = this.getMonthName(element[0]); // Obtener nombre del mes
        const filaCSV = `${mesNombre},${element[1]}\n`; // Construir fila CSV
        csvData += filaCSV; // Agregar fila al CSV
      });

      this.descargarArchivoCSV(csvData, 'ganancias_mensuales.csv'); // Descargar archivo CSV después de procesar los datos
    });
  }

  // Función para obtener el nombre del mes a partir de su número
  getMonthName(monthNumber: number): string {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return meses[monthNumber - 1]; // Restamos 1 porque los meses en JavaScript van de 0 a 11
  }

  descargarArchivoCSV(data: string, nombre: string) {
    const blob = new Blob([data], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  
}
